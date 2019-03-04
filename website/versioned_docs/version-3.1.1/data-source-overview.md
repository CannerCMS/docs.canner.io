---
id: version-3.1.1-data-source-overview
title: Overview
sidebar_label: Overview
original_id: data-source-overview
---

Since CLI uses [GQLify](https://www.gqlify.com) to create the GraphQL server, the data source here is totally same as the [data source in GQLify](https://www.gqlify.com/docs/data-source-overview), and also you can customize your data source by following the [guides](https://www.gqlify.com/docs/create-own-data-source).

<!-- WIP The dataSources in `canner.server.js` and `canner.cloud.js` are different, so make sure you edit the right one. `canner.server.js` is for OSS (self-hosting), and `canner.cloud.js` is for Canner Cloud. -->

## Data Source in Schema

To change the data source in CannerCMS is simple, just edit the attribute `dataSource` of the first level tags. A dataSource is an object with a property `name` which corresponses the `dataSources` in your `canner.server.js` <!-- WIP (or `canner.cloud.js` if you are using Canner Cloud)-->.

**canner.schema.js**
```jsx
export default (

  <root>
    <array keyName="posts" dataSource={{name: 'firebase'}}>
      {/* ... */}
    </array>
    <array keyName="users" dataSource={{name: 'memory'}}>
      {/* ... */}
    </array>
  </root>
)

```

**canner.server.js**
```js
const admin = require('firebase-admin');
const {MemoryDataSource} = require('@gqlify/server');
const {FirebaseDataSource} = require('@gqlify/firebase');
const cert = require('/path/to/serviceAccount.json');
const databaseUrl = 'https://databaseName.firebaseio.com';
exports.dataSources = {
  firebase: args => new FirebaseDataSource({
    config: {
      credential: admin.credential.cert(cert),
      databaseURL,
    },
    path: args.key,
  }),
  memory: args => new MemoryDataSource(defaultData[args.key]),
}
```

## Data Source in `canner.server.js`

Your `canner.server.js` must export a variable `dataSources` which is a map of DataSource instances.

**canner.server.js**
```js
exports.dataSource = {
  // memory data-source
  memory: () => new MemoryDataSource(),

  // myApi data-source
  myApi: args => new CustomizedDataSource({
    service: args.service,
    table: args.table,
  }),
}
```

<!--  WIP feature


## Data Source in `canner.cloud.js`

For supporting the sandbox mode, the `dataSources` in your `canner.cloud.js` contains the dataSource map in different environments. Note that the `default` environment is required.

**canner.cloud.js**
```js
exports.dataSource = {
  // default env is required
  default: {
    // memory data-source
    memory: () => new MemoryDataSource(),

    // myApi data-source
    myApi: args => new CustomizedDataSource({
      service: args.service,
      table: args.table,
    }),
  },
  // test env
  test: {
    // memory data-source
    memory: () => new MemoryDataSource(),

    // myApi data-source
    myApi: args => new TestDataSource({
      service: args.service,
      table: args.table,
    }),
  },
}
``` -->
