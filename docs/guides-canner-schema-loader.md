---
id: guides-canner-schema-loader
title: Setup canner-schema-loader in webpack
sidebar_label: Setup canner-schema-loader
---

## Introduction

Canner CMS provides sugar syntax in JSX called `canner-script`, JSX is deconstructed into objects **schema object** and **componentTree**. 

> The reason we want to compile through webpack is to prevent redundant executions in runtime, which can boost speed and more intuitive development flow.

First of all add a new loader in your webpack configuration. Remember to install `canner-schema-loader` and `babel-loader`

```js
// ...
rules: [{
  test: /(\.schema\.js|canner\.def\.js)$/,
  use: [
    {
      loader: 'canner-schema-loader'
    }, {
      loader: 'babel-loader',
    }]
  ],
}]
// ...
```

***canner.schema.js***
```js
module.exports = (
  <root>
    <object keyName="info">
      <string keyName="name" title="Name" />
    </object>
  </root>
)
```

**CMS**

`canner`'s CMS component needs a schema that compiles through `canner-schema-loader`

```js
import Canner from 'canner';
// we can get a object including the `jsonSchema` and `componentTree`
import schema from 'canner.schema.js';

//return part
return <Canner
  {...OtherProps}
  schema={schema} // pass to schema prop
/>
```
