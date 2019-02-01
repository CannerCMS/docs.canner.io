---
id: data-source-memory
title: Memory
sidebar_label: Memory
---

## Install Dependencies

```shell
$ yarn add @gqlify/server
```

## Use is `canner.server.js`

**canner.server.js**
```js
const {MemoryDataSource} = require('@gqlify/server');
const defaultData = require('/your/default/data.json');

exports.dataSources = {
  memory: args => new MemoryDataSource(defaultData[args.key]),
}
```

**canner.schema.js**
```js
export default (
  <root>
    <array keyName="posts" dataSource={{name: 'memory'}}>
      {/* ... */}
    </array>
  </root>
)
```
<!-- WIP
## Use is `canner.cloud.js`

`canner.cloud.js` is used for Canner Cloud version. It supports sandbox feature, so you have to set the different dataSources in different environments.

**canner.server.js**
```js
const {MemoryDataSource} = require('@gqlify/server');
const defaultData = require('/your/default/data.json');

exports.dataSources = {
  // default env
  default: {
    memory: args => new MemoryDataSource(defaultData[args.key])
  }
}
```

**canner.schema.js**
```js
export default (
  <root>
    <array keyName="posts" dataSource={{name: 'memory'}}>
      {/* ... */}
    </array>
  </root>
)
``` -->