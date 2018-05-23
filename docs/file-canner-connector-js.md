---
id: file-canner-connector-js
title: canner.connector.js
sidebar_label: canner.connector.js
---

Export your [connectors](http://framework.canner.io/docs/guides-connector.html) from `canner.connector.js`, `connector` sets the default connector in your CMS, and `connectors` is a connector map that you can give the connector to corresponding key in data.

> Learn more about [Connectors](http://framework.canner.io/docs/guides-connector.html)

```js
{
  connector: ConnectorInstance
  connectors?: {[key: string]: ConnectorInstance}
}
```

**canner.connector.js**

```js
...
exports.connector = myDefultConnector;
exports.connectors = {
  posts: postsConnector // only posts key will use posts connector
}

```