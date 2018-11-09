---
id: guides-resolver
title: Resolver
sidebar_label: Resolver
---

## Introduction

By assigning `connector` to schema, the requests from view layer will be handled in connectors, then adapted into different APIs; nevertheless, there are some situations where we want to customize the data flow. In these situations, we write resolvers. By convention, we put all resolvers in `Fields` and define the `resolve`, `create` and `update` functions.
* `resolve`: `resolve` function should return value of the field
* `create`: `create` function should return payload that will be passed to connector's create method.
* `update`: `update` function should return payload that will be passed to connector's update method.

## Usage

**Only first level tags in `<root/>`** can have a prop called resolver.

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    <object
      keyName="overview"
      title="Overview Tab"
      connector={connector}
      resolver={resolver}> // -----> setup resolver
      <string title="Your name" keyName="name"/>
    </object>
    <array
      keyName="list"
      title="Products"
      connector={connector2}
      resolver={resolver}> // -----> setup resolver
      <string title="Product name" keyName="name"/>
    </array>
  </root>
)
```

### Virtual Field
We can create a virtual field that is composed of existing fields that are not saved to a database.

``` js
const postsResolver = {
  Fields: {
    fullName: {
      resolve: (rootValue) => {rootValue.firstname + rootValue.lastname};
      // returning undefined will make the field filtered out
      create: () => { return undefined; }
      update: () => { return undefined; }
    }
  }
}
```

### Join Data
We can fetch data from another remote API.

``` js
const postsResolver = {
  Fields: {
    comments: {
      resolve: (rootValue) => {
        return fetchComments({postId: rootValue.id});
      }
      // returning undefined will make the field filtered out
      create: () => { return undefined; }
      update: () => { return undefined; }
    }
  }
}
```

### Transform Field
We can transform field values based on data type on the fly. For example, we have a field named `date` with `DateTime` type and we want to save as `YYYYMMDD` in API, then transform back to Canner's `Datetime` type during query.
``` js
const postsResolver = {
  Fields: {
    date: {
      // transform YYYYMMDD type from DB to Datetime type in Canner
      resolve: (rootValue) => {
        return transform_YYYMMDD_to_ISO8601(rootValue.date);
      }
      // save iso8601 string to YYYYMMDD in database
      create: (payload) => {
        return transform_ISO8601_to_YYYMMDD(payload.date);
      }
      update: (payload) => {
        return transform_ISO8601_to_YYYMMDD(payload.date);
      }
    }
  }
}
```

## Interface

```js
interface CustomizeResolver {
  Fields: {
    [fieldname: string]: {
      resolve: (rootValue) => Promise<any>;
      create: (payload: any, schema: Field) => Promise<any>;
      update: (payload: any, schema: Field) => Promise<any>;
    }
  };
}

interface Field {
  exists(): boolean;
  getKey(): string;
  getType(): Types;
  getChild(fieldName: string): Field;
  forEach(visitor: (field: Field) => any);
}

enum Types {
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
  INT = 'INT',
  ID = 'ID',
  IMAGE = 'IMAGE',
  FILE = 'FILE',
  DATETIME = 'DATETIME',
  GEOPOINT = 'GEOPOINT',
  JSON = 'JSON',
  RELATION = 'RELATION'
}
```
