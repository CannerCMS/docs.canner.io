---
id: why-graphql
title: Why build on GraphQL?
sidebar_label: Why build on GraphQL?
---

One of our missions in Canner is building a universal CMS interface that could easily adapts fo different APIs and data sources. The underlying technology we use is **GraphQL**.

If you’re not familiar with GraphQL, GraphQL is a query language for your API, and a runtime for executing queries by using a type system to define for your data. GraphQL isn’t tied to any specific database or storage engine and is instead backed by your existing code and data.

In our framework, we use canner schema to create an Apollo Client that serves a powerful GraphQL API to CMS components. GraphQL offers three main benefits:

## Eliminate frontend data boilerplate 

No need to worry about requesting and waiting for data. Just ask for the data you need with a GraphQL query and it’ll show up when you need it.

## Better data management
GraphQL gives you exactly what you want in view layer, for example:

```graphql
{
  post(where: {id: "1"}) {
    id
    title
  }
}
```

Using the query above, you’ll get the exact object as response, which makes your code less prone to undefined error.

Furthermore, Apollo client already comes with great features like caching, network layer, optimistic UI, etc... These features help us achieve better performance.

## Easier to aggregate data from multiple sources
Dealing with relationship is hard. It’s even harder to join data from multiple sources and serve as a clean response. Using **GraphQL and Apollo** allow us to build better API for view layer and provide data customization API to developers.

## Push frontend complexity into queries

many data transformations can be done at **build-time** within your GraphQL queries

## Community support
Canner is an open-sourced framework, since Apollo Framework and GraphQL are also open-sourced and already have large community, it’s reasonable to build on top of them and let developers get familiar to our framework faster and easier.