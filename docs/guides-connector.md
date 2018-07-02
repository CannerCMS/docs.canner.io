---
id: guides-connector
title: Connector
sidebar_label: Connector
---

**Connector** is how Canner CMS works to connect to different backend services. We provide different connectors for users to import and connect to their services.

Connector in Canner CMS is a **Apollo** connector, definition quoted from [Apollo Connector](https://github.com/apollographql/graphql-tools/blob/master/designs/connectors.md#what-is-a-connector).

> A connector is the piece of code that links a GraphQL server to a specific backend (eg. MySQL, MongoDB, S3, neo4j). Each backend will have its own connector. Apart from connecting the GraphQL server to a backend, connectors should also:
> 
> - Batch requests together whenever it makes sense
> - Cache data fetched for the backend to avoid extra requests (at least for the duration of one query)
> - Provide a way to log information about data fetched, such as how long the request took, which things were batched together, what was fetched from the cache, how much data was fetched etc.
> 
> Both batching and caching are more important in GraphQL than in traditional endpoints, because one GraphQL query may make many separate calls to the backend to retrieve all the items where a REST endpoint would only retrieve a few items, usually in one query. The separate calls let GraphQL support a wide range of queries, whereas a single REST endpoint typically only allows querying for a narrow set of objects.

> NOTE: you will need to install `canner-graphql-interface` to require essential connectors, and select `FirebaseRtdbAdminConnector` if you using CannerIO platform.


To setup your connector in CMS pass `connector` in eithor your `<root/>` or **first level tags in root**. Connector must be a `ConnectorInstance`.

## Supported connectors:

### MemoryConnector

Connect to your browser memory. The data will be removed after you close the web.

**Usage:**

```js
import {MemoryConnector} from "canner-graphql-interface";

const fakeData = {
  users: [
    {id: '1', age: 10, name: 'user1', email: 'test@email.com'},
    {id: '2', age: 20, name: 'user2', email: 'test@email.com'}
  ]
}

// pass `connector` to props
const connector = new MemoryConnector({
  defaultData?: fakeData
});
```

### FirebaseRtdbAdminConnector

Connect to Firebase realtime database using Firebase Admin SDK (Firebase Admin SDK provides more powerful features such as storage, complete APIs to Firebase, **if you are using CannerIO with Firebase use this.**)

**Usage:**

```js
import {FirebaseRtdbAdminConnector} from "canner-graphql-interface";

// pass `connector` to props
const connector = new FirebaseRtdbAdminConnector({
  projectId: '<PROJECT_ID>'
});
```

### FirebaseRtdbClientConnector

Connect to Firebase realtime database using Firebase client SDK (If you are using **Community edition** with Firebase, should use this.)

**Usage:**

```js
import {FirebaseRtdbClientConnector} from "canner-graphql-interface";

const config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
firebase.initializeApp(config);

// pass `connector` to props
const connector = new FirebaseRtdbClientConnector({
  database: firebase.database()
});
```

## Single connector

```jsx
/** @jsx builder */
import builder from 'canner-script';
import {FirebaseRtdbAdminConnector} from 'canner-graphql-interface';

const myDefultConnector = new FirebaseRtdbAdminConnector({
  projectId: "<PROJECT_ID>"
});

export default (
  <root connector={myDefultConnector}>
    // {... your schema}
  </root>
)
```

## Multiple connectors

If you want to connect different sources in different tabs, you can pass `connector` props to **first level tags in `<root/>`**.

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    <object
      keyName="overview"
      title="Overview Tab"
      connector={connector}
      resolver={resolver}>
      <string title="Your name" keyName="name"/>
    </object>
    <array
      keyName="list"
      title="Products"
      connector={connector2}
      resolver={resolver}>
      <string title="Product name" keyName="name"/>
    </array>
  </root>
)
```

## Supported GraphQL Services:
### PrismaClient

Connect to [Prisma](https://www.prisma.io/) service

**Usage:**

```js
import {PrismaClient} from "canner-graphql-interface";

// contruct graphQL client
const graphqlClient = new PrismaClient();
```

## GraphQL Client
```jsx
/** @jsx builder */
import builder from 'canner-script';
import {PrismaClient} from "canner-graphql-interface";

// contruct graphQL client
const graphqlClient = new PrismaClient();

export default (
  <root graphqlClient={graphqlClient}>
    // {... your schema}
  </root>
)
```
