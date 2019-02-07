---
id: version-3.0.0-graphql-api-read-only-access
title: ReadOnly Access GraphQL API
sidebar_label: ReadOnly API
original_id: graphql-api-read-only-access
---

> **⚠︎ Notice**
> 
> Setting up ReadOnly GraphQL API will exposed all of your data to public through a `readOnlyAccessToken`.
>
> Clients with `readOnlyAccessToken` can only request queries and cannot request any mutation.


## 1. Setup `graphql.readOnlyAccessToken`
**canner.server.js**
```js
exports.graphql = {
  readOnlyAccessToken: "your-read-only-token"
};
```

## 2. Request from anywhere with bearer token in header
```js
// headers
{
  headers: {
    Authorization: "Bearer your-read-only-token"
  }
}
```
