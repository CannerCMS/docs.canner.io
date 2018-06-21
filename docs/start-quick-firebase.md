---
id: start-quick-firebase
title: How to Firebase - Realtime database
sidebar_label: Firebase - Realtime database
---

> NOTE: We are not supporting **Firestore** at this moment

## 1. Install Canner CLI

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

## 2. Select project

To use `Canner CLI` in your own project, go in current project folder and run the command:

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

## 3. Install required package

In your project folder, you have to install two more packages that will be used later.

- `canner-script`: is the core library of how you define your CMS data structure and appearance. [Learn more](advance-canner-script.html)
- `canner-graphql-interface`: is the library that tells how to connect to your data sources. [Learn more](guides-connector.html)

```sh
npm install canner-script canner-graphql-interface
```

## 4 Download private key

Download the firebase private key and put in `cert/firebase` folder.

Go to **Project settings** > **Service accounts** > **Generate new private key**

![firebasesdk](/img/firebasesdk.gif)

> We need your Firebase private key to access more control in your Firebase, such as more complete APIs, and storage APIs.


## 5. Prepare files

You only need to create a file called `canner.schema.js` to complete your CMS.

`canner.schema.js` defines how your CMS and data structure looks like, and how your CMS should connect to your sources.

> Learn how to [write schema](guides-writing-schema)

> By default, you have to put `canner.schema.js` in the root of your project.


## 6. Deploy

After writing your `canner.schema.js` you could deploy your script to CannerIO through our CLI tool by entering

```sh
canner script:deploy
```

## 7. CMS is live

Go to your dashboard in CannerIO and select your app, you will see your CMS live.