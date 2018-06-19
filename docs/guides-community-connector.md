---
id: guides-community-connector
title: Connector
sidebar_label: Connector
---

## Schema connecting to source

Get connectors from `canner-graphql-interface`, and create a new instance and pass it to `CMS` component as the `connector` prop.

> You don't have to install `canner-graphql-interface` manually, beacause it's a dependency of `canner.`

```js
import React from 'react';
import {CMS} from 'canner';
import {FirebaseRtdbClientConnector} from 'canner-graphql-interface';

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
const connector = new FirebaseRtdbClientConnector({
  database: defaultApp.database()
});

export default class App extends React.Component (
  render() {
    return <CMS
      {...}
      connector={connector}
    />
  }
);
```

### Multiple connectors in a CMS

If you want to connect two or more data sources in your CMS, put them in for the corresponding keys.

***Delegate a connector to a specific key***

> Assign default connector by using `__default` key

```js
const connectors = {
  __default: defaultConnector
  posts: postsConnector,
  info: postsConnector,
};
export default class App extends React.Component (
  render() {
    return <CMS
      {...}
      connector={connectors}
    />
  }
);
```

***Default connector***

If there is no connector as props to `CMS` component, Canner will use **memory connector** to store data in your browser memory.

## Connector support

- [Memory Connector]()
- [Firebase Connector]()