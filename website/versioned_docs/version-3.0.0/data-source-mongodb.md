---
id: version-3.0.0-data-source-mongodb
title: Mongodb
sidebar_label: Mongodb
original_id: data-source-mongodb
---

## Use is `canner.server.js`

**canner.server.js**
```js
const { Gqlify } = require('@gqlify/server')
const { MongodbDataSourceGroup } = require('@gqlify/mongodb')

// connect to your mongoUri. You might keep your mongoUri in env.
const mongoUri = process.env.MONOG_URI;

// new MongodbDataSourceGroup(uri, database)
const mongodbDataSourceGroup = new MongodbDataSourceGroup(mongoUri, 'gqlify');

exports.dataSources = {
  mongodb: args => mongodbDataSourceGroup.getDataSource(args.key),
}
```

**canner.schema.js**
```js
export default (
  <root>
    <array keyName="posts" dataSource={{name: 'mongodb'}}>
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
const { Gqlify } = require('@gqlify/server')
const { MongodbDataSourceGroup } = require('@gqlify/mongodb')

// connect to your mongoUri. You might keep your mongoUri in env.
const mongoUri = process.env.MONOG_URI;

// new MongodbDataSourceGroup(uri, database)
const mongodbDataSourceGroup = new MongodbDataSourceGroup(mongoUri, 'gqlify');

exports.dataSources = {
  // default env
  default: {
    mongodb: args => mongodbDataSourceGroup.getDataSource(args.key),
  }
}
```

**canner.schema.js**
```js
export default (
  <root>
    <array keyName="posts" dataSource={{name: 'mongodb'}}>
      {/* ... */}
    </array>
  </root>
)
``` -->