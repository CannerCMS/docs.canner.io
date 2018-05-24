---
id: start-installation
title: Installation
sidebar_label: Installation
---

## 1. Install Canner CLI

Make sure you have already install NodeJS and use the command below to install `@canner/cli` globally.

> While we recommend Node 8.x or greater, your Node version must at least 6.x.

```
npm install -g @canner/cli
```

You should now have a global canner command available from any terminal window on your machine. Once you've installed Canner CLI, sign in using your Canner account:

```
canner login
```

After logging in, it will store a token on your machine to validate login information at every canner comamnd, you can use `canner whoami` to check whether you are login or not, it will return your `username`.

## 2. Select project

To use `Canner CLI` in your own project, go in current project folder and run the command:

```
canner init
```

Choose the app url you want, after you select your app you can use all Canner services of the app with `@canner/cli`.

## 3. Deploy scripts

After writing your `canner.schema.js`, `canner.resolver.js`, `canner.connector.js` you could deploy your script to CannerIO through our CLI tool by entering

> Learn how to write [`canner.schema.js`](file-canner-schema-js)
> Learn how to write [`canner.connector.js`](file-canner-connector-js)
> Learn how to write [`canner.resolver.js`](file-canner-resolver-js)

> By default, you have to put `canner.schema.js`, `canner.resolver.js`, `canner.connector.js` in the root of your project.

```sh
canner script:deploy
```

### customize file paths

If you want to use your own file naming, you could modify by adding key `schema`, `resolver`, `connector` in `.cannerrc`

In `.cannerrc`

```js
{
  ...
  schema: '<path to your>/custom.schema.js',
  resolver: '<path to your>/custom.resolver.js',
  connector: '<path to your>/custom.connector.js'
}
```
