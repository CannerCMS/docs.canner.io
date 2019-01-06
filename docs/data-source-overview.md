---
id: data-source-overview
title: Overview
sidebar_label: Overview
---

In order to access your database and services, there are two ways to achieve. One is calling your service APIs through Canner backend, so we have to own the credentials to access the APIs, and another is calling the service APIs in the frontend page which means you have to add the `connector` or `graphqlClient` property in your `<root>` tag manually

## Using Credentials

Canner's credential libaray are all live in `canner-credential` package.

You could install `canner-credential` through npm.

```sh
npm install canner-credential
```

Supported services:

- [Firebase - Realtime database](credential-firebase)
- [Firebase - Firestore](credential-firestore)
- [Prisma](credential-prisma)

## Connector and GraphqlClient

To connect your GraphQL server, check out [guide of graphqlClient](guides-graphql-client).
To use your fake data with memory or localStorage, checkout out [memoryConnector](guides-connector#memoryconnector) and [localStorageConnector](guides-connector#localstorageconnector).


