---
id: advance-canner-cms
title: Canner CMS
sidebar_label: Canner CMS
---

> `React` version must be >= 16.x version

`CannerCMS` is composed of two main components: `Provider` and `Generator`. `Provider` deals with operations such as create, read, update, delete (aka `CRUD`) and `Generator` deals with rendering user interfaces.

```js

class CMS extends React.Component {
  render() {
    <Provider>
      <Generator />
    </Provider>
  }
}
```

## Provider

The `Provider` component creates a new `App` instance, which creates the CRUD operations for the component, passing methods through react `context` to children.

In order to make `App` work, we need sufficient information of your CMS, two required props called `schema` and `endpoints` **must** be passed into the `Provider` component

### `schema` prop

When you require your `canner.schema.js` through the webpack [`canner-schema-loader`](guides-canner-schema-loader.md), you will get a schema object that contains the CMS schema, which describes the CMS data structure and user interface.

```js
// schema is a schema object that 
import schema from 'canner.schema.js';
```

schema will be something like this:

```js
// types
{
 [key: string]: CannerSchema
}
// e.g.
{
  info: {
    type: 'object',
    items: {
      name: {
        type: 'name',
        ui: 'input'
      }
    }
  }
}
```


> see more guides of compile schema in [Compile schema section](concept-compile-canner-schema.md) 

## Generator

`Generator` component uses [`componenetTree`](concept-component-tree.md) to render the CMS user interface. Internally, we split into two stages: `prerender` and `render`.

### Stage 1: Prerender stage

While contructing, `Generator` will **prerender** `ComponentTree`, walking through nodes, and decorating needed high order components on UI components. These **high order components** are essential because they provide needed props to components such as the `onChange` and `value` props. Currently, we support the following high order components.

HOCs list:

- id
- route
- cache
- query
- request
- deploy
- onDeploy
- title

### Stage 2: Render stage

When rendering, apart from original node's information, generator will pass additional 3 methods to component. 

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>transformData</td>
    <td><code>any => Immutable</code></td>
    <td>turn data to immutable</td>
  </tr>
  <tr>
    <td>createEmptyData</td>
    <td><code>(schema: Object) => any</code></td>
    <td>this function will returns schema object of inserted schema object</td>
  </tr>
  <tr>
    <td>renderChildren</td>
    <td><code>({id, routes, ...otherProps}) => React$Node</code></td>
    <td>As for object, array plugins, they can use this method to render their children without knowing internal information of their children</td>
  </tr>
</table>
