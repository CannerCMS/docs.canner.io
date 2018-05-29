---
id: start-quick-firebase
title: Quick Start Firebase
sidebar_label: Quick Start Firebase
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

## 3. Install required package

In your project folder, you have to install two more packages that will be used later.

```
npm install canner-script canner-graphql-interface
```

## 4 Download private key

Download the firebase private key and put in `cert/firebase` folder.

Go to **Project settings** > **Service accounts** > **Generate new private key**

![firebasesdk](/img/firebasesdk.gif)

> We need your Firebase private key to access more control in your Firebase, such as more complete APIs, and storage APIs.


## 5. Prepare files

There are three required files `canner.schema.js`, `canner.connector.js` and `canner.resolver.js`.

`canner.schema.js` defines how your CMS and data structure looks like.

> - Learn how to write [`canner.schema.js`](file-canner-schema-js)

`canner.connector.js` defines how to connect to your data sources.
> - Learn how to write [`canner.connector.js`](file-canner-connector-js)

`canner.resolver.js` defines customize data API in your data flow.
> - Learn how to write [`canner.resolver.js`](file-canner-resolver-js)

> By default, you have to put `canner.schema.js`, `canner.resolver.js`, `canner.connector.js` in the root of your project.


## 6. Deploy

After writing your `canner.schema.js`, `canner.resolver.js`, `canner.connector.js` you could deploy your script to CannerIO through our CLI tool by entering

```sh
canner script:deploy
```

## 7. CMS is live

Go to your dashboard in CannerIO and you'll see your CMS live.
