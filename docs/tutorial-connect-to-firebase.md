---
id: tutorial-connect-to-firebase
title: Connect to Firebase Realtime Database
sidebar_label: Connect to Firebase Realtime Database
---

> NOTE: We are not supporting **Firestore** at this moment

## 1. Install Canner CLI

Make sure you have already install NodeJS and use the command below to install `@canner/cli` globally.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

```sh
npm install -g @canner/cli
```

You should now have a global canner command available from any terminal window on your machine. Once you've installed Canner CLI, sign in using your Canner account:

```sh
canner login
```

After logging in, it will store a token on your machine to validate login information at every canner comamnd, you can use `canner whoami` to check whether you are login or not, it will return your `username`.

## 2. Initialize project

To use `Canner CLI` in your own project, go in current project folder and run the command:

```sh
canner init
```

It will ask you some questions to initialize your project with template schema.

```sh
? Create an new app or select from existed apps? Select from existed apps
? What template do you want to create? Blog
? What data source do you want to use? Firbase Admin
```

Then you'll see `.cannerrc`, `canner.schema.js`, `schema`, `cert` in your folder.

> - Learn more about [`.cannerrc`](file-cannerrc.md) 
> - Learn more about [`canner.schema.js`](file-canner-schema-js.md) 
> - Learn more about [`cert`](file-cert.md) 


## 3 Edit Firebase configuration.

Download the firebase private key and put in `cert/firebase` folder.

Go to **Project settings** > **Service accounts** > **Generate new private key**

![firebasesdk](/img/firebasesdk.gif)

Edit the `schema/utils.js` with your Firebae project id.
```js
exports.connector = new FirebaseRtdbAdminConnector({
  projectId: '<your firebase projectId>'
});
```

> We need your Firebase private key to access more control in your Firebase, such as more complete APIs, and storage APIs.




## 4. Deploy

After editing your Firebase configuration you can deploy your script to CannerIO through our CLI tool by entering

```sh
canner script:deploy
```

## 5. CMS is live

Run `canner open:dashboard` and click `Edit Content`, you will seed your CMS live.

![editContent](/img/editContent.png)
