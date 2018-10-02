---
id: start-quick-3commands
title: Building CMS in 3 commands
sidebar_label: Building CMS in 3 commands
---

## 1. Install Canner CLI

Make sure you have already install NodeJS and use the command below to install `@canner/cli` globally.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

```sh
npm install -g @canner/cli
```

## 2. Initialize Schema

After installing **Canner CLI** in your own project, go in current project folder and run the command:

```shell
$ canner init:schema
```

It will ask you to select a schema template and a data source you want to use.

```shell
$ canenr init:schema
Initializing schema...
? What template do you want to create? Blog
? What data source do you want to use? Firebase admin
✔ Initialized
```

Choose any except `None`, and you'll see the folders `schema`, `cert` and `canner.schema.js` appearing in your project folder. `canner.schema.js` and the folder `schema` are the schemas that Canner use them to build the CMS. The folder `cert` stores certification files for Canner to connect data source.

> - Learn more about [`schema`](file-canner-schema-js.md)
> - Learn more about [`cert`](file-cert.md) 

## 3. Serving in Local Machine

In your project folder, you can just run `canner script:serve` to build your CMS and host it. Open [http://localhost:9090](http://localhost:9090), you will see the result as below.

![users-cms](/docs/assets/users-cms.png)


> You can also serve data from different environment settings, learn more [here](cli-development.md).


## 4. Next Step

You can follow the document below to build CMS on Canner with connecting your data source.

- [connect to Firebase admin](start-quick-firebase.md)
- [connect to Prisma](start-quick-prisma.md)
