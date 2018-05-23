---
id: file-canner-connector-js
title: canner.connector.js
sidebar_label: canner.connector.js
---


[Learn more](http://framework.canner.io/docs/guides-connector.html)



There are two keys exported from `canner.connector.js`, `connector` is the default connector in your CMS, and `connectors` is a connector map that you can give the connector for each key.

```js
{
  connector: ConnectorInstance
  connectors?: {[key: string]: ConnectorInstance}
}
```

**canner.schema.js**
```js
...
exports.connector = myDefultConnector;
exports.connectors = {
  posts: postsConnector // only posts will use posts connector
}

```