---
id: guides-connector
title: Connector
sidebar_label: Connector
---

Connector is how Canner CMS works to connect to different backend services. We provide different connectors for users to import and connect to their services.

Connector in Canner CMS is a **Apollo** connector, definition quoted from [Apollo Connector](https://github.com/apollographql/graphql-tools/blob/master/designs/connectors.md#what-is-a-connector).

> A connector is the piece of code that links a GraphQL server to a specific backend (eg. MySQL, MongoDB, S3, neo4j). Each backend will have its own connector. Apart from connecting the GraphQL server to a backend, connectors should also:
> 
> - Batch requests together whenever it makes sense
> - Cache data fetched for the backend to avoid extra requests (at least for the duration of one query)
> - Provide a way to log information about data fetched, such as how long the request took, which things were batched together, what was fetched from the cache, how much data was fetched etc.
> 
> Both batching and caching are more important in GraphQL than in traditional endpoints, because one GraphQL query may make many separate calls to the backend to retrieve all the items where a REST endpoint would only retrieve a few items, usually in one query. The separate calls let GraphQL support a wide range of queries, whereas a single REST endpoint typically only allows querying for a narrow set of objects.


Export your [connectors](guides-connector.html) from `canner.connector.js`, `connector` sets the connectors in your CMS. Connector could be a `ConnectorInstance` or a object of `ConnectorInstance`.

> Learn more about [Connectors](guides-connector.html)

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