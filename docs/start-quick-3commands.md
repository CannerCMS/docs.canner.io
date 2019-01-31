---
id: start-quick-3commands
title: Building CMS in 3 commands
sidebar_label: Building CMS in 3 commands
---

## 1. Install Canner CLI

Make sure you have already installed NodeJS and use the command below to install `@canner/cli` globally. And as the [official NPM docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) mentioned, we also recommend using a Node version manager to prevent the [EACCESS issue](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).


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
In the Canner project, there are some important files you have to know, [`canner.schema.js`](file-canner-schema-js.md), [`canner.server.js`](file-canner-server-js.md), and [`canner.cloud.js`](file-canner-cloud-js.md). 

`canner.schema.js` is the most important one, which defines the data model and UIs of your CMS. It's written with `jsx`, a XML-like language, and is easy to learn and understand.

`canner.server.js` and `canner.cloud.js` are both configurations for hosting, such as the [**theme**](guides-theme), [**sidebar menu**](guides-sidebar.md), [**data sources**](data-source-overview.md), ...etc. The difference between them are the former one is used for self-hosting, which means you can locally serve and host your CMS and GraphQL APIs. The latter one is for Canner Cloud platform, which helps you to host the CMS on [cannercms.com](https://cannercms.com).

In this step, we create the three files with CLI. You can take a look at the files, and edit them by the following guides.

Now, let's create a empty folder and enter it.

```shell
$ mkdir my-cms
$ cd my-cms
```

Run command:

```shell
$ canner init
```

It ask you to select a schema template. Feel free to select any one of them, you can easily change afterwards.

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

And then, there will be serveral files and folders under the  directory.

- `canner.schema.js and schema/\*.schema.js`:
The schema of the CMS, defines the data model and UI.
- `components/\*.js`:
The customized components, not every projects have this.
- `canner.server.js`:
The configuration of **OSS** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.
- `canner.cloud.js`:
The configuration of **Cloud** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.


## 3. Host the CMS locally

Simply type `canner start` and go to `http://localhost:3000` to open your CMS. This command will read the configuration from `canner.server.js` and serve it. You can edit it by the following [guides](file-canner-server-js.md).

When running the command, it display an awesome dashboard displaying the progress of the static files building, server status, and server logs, ...etc. Here are the actions actually doing in the background.

- **Build static files**:
The static files of the CMS is generated under `./.cms`.
- **Build json schema**:
The JSON schema of your canner schema is generated called `canner.schema.json`.
- **Host the CMS**
Host the path `./.cms` at `http://localhost:3000`
- **Run the GraphQL server**
Parse `canner.schema.json` to [GQLify data modal](https://www.gqlify.com/docs/data-model-overview), and the endpoint will expose at `http://localhost:3000/graphql`

**Go to http://localhost:3000, you will see the CMS**
![users-cms](/docs/assets/users-cms.png)


## 4. Next Step

You can follow the instruction below to configurate your CMS.

- [Understand the schemas](schema-overview.md)
- [Change the data source](data-source-overview)
- [Deploy the CMS to Canner](guides-deploy-to-canner)
