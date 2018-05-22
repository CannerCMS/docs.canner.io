---
id: cli
title: @canner/cli
sidebar_label: Command line
---

`@canner/cli` is the Canner CLI(command line interface), it can be used to:

- Bundle scripts and deploy to CannerIO
- Import initial data to backend services.

## Get started

Make sure you have already install NodeJS and use the command below to install `@canner/cli` globally.

```
npm install -g @canner/cli
```

You should now have a global canner command available from any terminal window on your machine. Once you've installed Canner CLI, sign in using your Canner account:

```
canner login
```

After logging in, it will store a token on your machine to validate login information at every canner comamnd, you can use `canner whoami` to check whether you are login or not, it will return your `username`.

## Use in project

To use `Canner CLI` in your own project, go in current project folder and run the command:

```
canner init
```

Choose the app url you want, after you select your app you can use all Canner services of the app with `@canner/cli`.

## Deploy scripts

After writing your `canner.schema.js`, `canner.resolver.js`, `canner.connector.js` you could deploy your script to CannerIO through our CLI tool by entering

```sh
canner script:deploy
```

### customize file path

If you want to use your own file naming, you could modify by adding key `schema`, `resolver`, `connector` in `.cannerrc`

In `.cannerrc`

```js
{
  ...
  schema: 'custom.schema.js',
  resolver: 'custom.resolver.js',
  connector: 'custom.connector.js'
}
```
