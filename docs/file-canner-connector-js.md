---
id: file-canner-connector-js
title: canner.connector.js
sidebar_label: canner.connector.js
---

Export your [connectors](http://framework.canner.io/docs/guides-connector.html) from `canner.connector.js`, `connector` sets the connectors in your CMS. Connector could be a `ConnectorInstance` or a object of `ConnectorInstance`.

> Learn more about [Connectors](http://framework.canner.io/docs/guides-connector.html)

```js
{
  connector: ConnectorInstance | {[string]: ConnectorInstance}
}
```

## Single connector

**canner.connector.js**

> NOTE: you'll need to install `canner-graphql-interface` to require essential connectors, and select `FirebaseRtdbAdminConnector` if you using CannerIO platform.

```js
import {FirebaseRtdbAdminConnector} from 'canner-graphql-interface';

const myDefultConnector = new FirebaseRtdbAdminConnector({
  projectId: "test-firebase-778be"
});

export default myDefultConnector;
```

## Multiple connectors

> If you are using multiple connectors, set default connect use `__default` key.

```js
exports.connector = {
  __default: myDefultConnector,
  post: postConnector,
  test: testConnector
}
```