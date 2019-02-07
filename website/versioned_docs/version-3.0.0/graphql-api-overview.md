---
id: version-3.0.0-graphql-api-overview
title: GraphQL API Overview
sidebar_label: Overview
original_id: graphql-api-overview
---

Your GraphQL API is protected by OpenID Connect. Requests without valid token signed from your Authentication Service will be rejected.

Under development, you can open GraphQL Playground with signed token on our dashboard.

### GraphQL Playground

![graphql-playground](/docs/assets/graphql-playground.gif)


### Access your GraphQL API from clients
Without token, you cannot access GraphQL API. If your data on data-source are all public and would like to access them from clients, you can use Canner ReadOnly GraphQL API Access.

> Understand more about it at [ReadOnly GraphQL API Section](./graphql-api-read-only-access)


### Are there other ways to access GraphQL API?
You can always override the apollo context by `graphql.context` to customize your own authentication logic.


### Example
```js
// the default context implementation from canner
const {createContext} = require('@canner/graphql-server/lib/context');
// still verifying requests from cms
const cmsContext = createContext({
  oidc: {discoveryUrl: "your authentication discoveryUrl"}
});


// context api: https://www.apollographql.com/docs/apollo-server/api/apollo-server.html#constructor-options-lt-ApolloServer-gt
exports.graphql = {
  context: ({ ctx }) => {
    // verify your requests here
    if (verifyOwnRequest(ctx)) {
      return {
        // ...your own context
      };
    }

    // verify cms requests
    return cmsContext({ctx});
  }
};
```
