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

> NOTE: you'll need to install `canner-graphql-interface` to require essential connectors

```js
import {FirebaseConnector} from 'canner-graphql-interface';

// add a condition to check if firebase is initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAwzjZJD7SUCRC42mL7A9sw4VPIvodQH98',
    authDomain: 'apollo-test-2c6af.firebaseapp.com',
    databaseURL: 'https://apollo-test-2c6af.firebaseio.com',
    projectId: 'apollo-test-2c6af',
    storageBucket: '',
    messagingSenderId: '84103499922'
  });
}

const defaultApp = firebase.app();
const myDefultConnector = new FirebaseConnector({
  database: defaultApp.database()
});

exports.connector = myDefultConnector;
```

## Multiple connectors

> If you are using multiple connectors, set default connect use `__default` key.

```js
exports.connector = {
  __default: myDefultConnector,
  post: postConnector,
  test: testConnector
}