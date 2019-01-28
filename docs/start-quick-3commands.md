---
id: start-quick-3commands
title: Building CMS in 3 commands
sidebar_label: Building CMS in 3 commands
---

## 1. Install Canner CLI

Make sure you have already installed NodeJS and use the command below to install `@canner/cli` globally. And as the [official NPM docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) mentioned, we also recommend using a Node version manager to prevent the [EACCESS issue](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) if you need to install `@canner/cli` with `sudo`.


```shell
$ npm install -g @canner/cli
```

Check the installation with

```shell
$ canner --version
```

#### Note


- Your Node version must at least >= 6.10. 
#### Troubleshooting
- [EACCESS: permission denied](https://github.com/Canner/canner/issues/139)


## 2. Initialize project

Create a empty folder and enter it.

```shell
$ mkdir my-cms
$ cd my-cms
```

Run command:

```shell
$ canner init
```

It will ask you to select a schema template you want to use. Feel free to select any one of them.

```shell
Initializing...
? What template do you want to create? Blog
✔ Initialized


Next Steps:

  - Serve your CMS: canner script:serve

  - Or follow the docs below to connect your data source:
      Firebase Admin: https://www.canner.io/docs/credential-firebase
      Prisma: https://www.canner.io/docs/credential-prisma
```

And then, there will be serveral files and folders under the currect directory.

#### `canner.schema.js and schema/\*.schema.js`
The schema of the CMS, defines the data model and UI.
#### `components/\*.js`
The customized components, not every project would have this.
#### `canner.server.js`
The configuration of **OSS** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.
#### `canner.cloud.js`
The configuration of **Cloud** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.


## 3. Host the CMS locally

Simply type `canner start` and go to `http://localhost:3000` to see your CMS. The command will do the actions below.

#### Build static files
The static files of the CMS is generated under `./.cms`.
#### Build json schema
The JSON schema of your canner schema is generated called `canner.schema.json`.
#### Host the CMS
Host the path `./.cms` at `http://localhost:3000`
#### Run the GraphQL server
Parse `canenr.schema.json` to [GQLify data modal](https://www.gqlify.com/docs/data-model-overview), and the endpoint is `http://localhost:3000/graphql`

**Go to http://localhost:3000, you will see the CMS**
![users-cms](/docs/assets/users-cms.png)


## 4. Next Step

You can follow the instruction below to configurate your CMS.

- [Understand the schemas](schema-overview.md)
- [Change the data source](data-source-overview)
- [Deploy the CMS to Canner](guides-deploy-to-canner)
