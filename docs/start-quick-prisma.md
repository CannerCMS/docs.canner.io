---
id: start-quick-prisma
title: Quickstart With Prisma GraphQL
sidebar_label: Prisma - GraphQL
---
![cannerxprisma](/docs/assets/orange.png)

> [Prisma](https://www.prisma.io/) is a performant open-source GraphQL ORM-like layer doing the heavy lifting in your GraphQL server.

In this article, I'm going to demonstrate how to use Canner with [Prisma](https://www.prisma.io/).

> We assume you already deployed a Prisma server, if not, please refer to [Prisma document](https://www.prisma.io/docs/quickstart/)

## 1. Start with a New Project Folder
Let's start with a new project folder. We'll put related files under this folder.

```sh
mkdir canner-prisma && cd canner-prisma
```

## 2. Install Canner CLI

Make sure you have already install NodeJS and use the command below to install `@canner/cli` globally.

> While we recommend Node 8.x or greater, your Node version must at least 6.x.

```sh
npm install -g @canner/cli
```

You should now have a global canner command available from any terminal window on your machine. Once you've installed Canner CLI, sign in using your Canner account:

```sh
canner login
```

After logging in, it will store a token on your machine to validate login information at every canner comamnd, you can use `canner whoami` to check whether you are login or not, it will return your `username`.

## 3. Select project

To use `Canner CLI` in your own project, run the command under current project folder:

```sh
canner init
```

It will ask you whether select existing apps or create new one.

```sh
? Create an new app or select from existed apps (Use arrow keys)
❯ Select from existed apps
  Create a new app
```

Choose the app url you want.  And you'll see a new `.cannerrc` in your folder. It'll record the configuration.

> Learn more about [`.cannerrc`](file-cannerrc.md) 

## 4. Install required packages

In your project folder, you have to install two more packages that will be used later.

- `canner-script`: is the core library of how you define your CMS data structure and appearance. [Learn more](advance-canner-script.html)
- `canner-graphql-interface`: is the library that tells how to connect to your data sources. [Learn more](guides-connector.html)

```sh
$ npm init -y
$ npm install canner-script canner-graphql-interface
```

## 5. Copy Prisma's Files
Canner needs prisma's `datamodel.graphql` and `prisma.yml` to create a proxy server that deliver requests to your prisma server.

Copy these two files from your prisma project folder to `cert/prisma`

```sh
$ mkdir -p cert/prisma
$ cp path/to/prisma-project/prisma.yml ./cert/prisma
$ cp path/to/prisma-project/datamodel.graphql ./cert/prisma
```

## 6. Write canner.schema.js
You only need to create a file called `canner.schema.js` to complete your CMS.

`canner.schema.js` defines how your CMS and data structure looks like, and how your CMS should connect to your sources.

> Learn how to [write schema](guides-writing-schema)

A basic `Post` schema from a blog application with following graphql model
``` js
type Post {
  id: ID! @unique
  createdAt: DateTime!
  content: String!
  title: String!
}
```
will look like this:
``` js
<root>
  <array
    keyName="Post"
    title="Post"
    >
    <dateTime title="Created Date" keyName="createdAt"/>
    <string title="Title" keyName="title"/>
    <string title="Content" keyName="content"/>
  </array>
<root>
```

For example, if you wrote your `datamodel.graphql` as:
```graphql
type Post {
  id: ID! @unique
  createdAt: DateTime!
  content: String!
  title: String!
  owner: User! @relation(name: "UserPosts")
  location: Location!
}

type User {
  id: ID! @unique
  name: String! @default(value: "")
  posts: [Post!]! @relation(name: "UserPosts", onDelete: CASCADE)
}

type Location {
  lat: Float!
  lng: Float!
  placeId: String
  address: String
}
```

You'll have to write a `canner.schema.js` containing the same fields with `datamodel.graphql`.


Furthermore, To connect the CMS to Prisma server, simply construct a `PrismaClient` and pass it to `<root>`.

Hence, the `canner.schema.js` should be:
``` js
/** @jsx builder */
import builder from 'canner-script';
import {PrismaClient} from "canner-graphql-interface";

// contruct graphQL client
const graphqlClient = new PrismaClient();

export default (
  <root graphqlClient={graphqlClient}>
    <array
      keyName="Post"
      title="Post"
      uiParams={{
        columns: [{
          title: "title",
          key: "title",
          dataIndex: "title"
        }, {
          title: "owner",
          key: "owner.name",
          dataIndex: "owner.name"
        }]
      }}
      ui="tableRoute"
      >
      <dateTime title="createdAt" keyName="createdAt"/>
      <string title="title" keyName="title"/>
      <string title="content" keyName="content"/>
      <relation keyName="owner"
        relation={{
          to: 'User',
          type: 'toOne'
        }}
        uiParams= {{
          textCol: 'name',
          columns: [{
            title: 'Name',
            dataIndex: 'name'
          }]
        }}
      />
      <geoPoint title="location" keyName="location"/>
    </array>

    <array
      keyName="User"
      title="User"
      uiParams={{
        columns: [{
          title: "name",
          key: "name",
          dataIndex: "name"
        }]
      }}
      ui="tableRoute"
      >
      <string title="name" keyName="name"/>
      <relation keyName="posts"
        relation={{
          to: 'Post',
          type: 'toMany'
        }}
        uiParams= {{
          textCol: 'title',
          columns: [{
            title: 'title',
            dataIndex: 'title'
          }]
        }}
      />
    </array>
  </root>
)
```

> To learn more about how to define Canner Schema's tag correspoding to prisma's datatype, see [Canner and Prisma Datatype Comparison](/docs/advance-canner-prisma-type)

## 7. Deploy

After writing your `canner.schema.js` you could deploy your script to CannerIO through our CLI tool by entering

```sh
canner script:deploy
```

## 8. CMS is live

Go to your dashboard in CannerIO and select your app, you will see your CMS live.

## Resource
* [Canner and Prisma Datatype Comparison](/docs/advance-canner-prisma-type)
