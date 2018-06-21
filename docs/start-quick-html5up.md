---
id: start-quick-html5up
title: First CMS using Canner in 3 minutes
sidebar_label: First CMS in 3 minutes - HTML5UP
---

HTML5UP is one of the most famous free template online, beautiful design and many template options, most importantly, all templates are released under Creative Commons Attribution license, which means you could use it for personal or commercial purpose.

We are going to show you **how to build a HTML5UP CMS in 3 minutes and using Firebase as database**, in fact, after this tutorial you will find out you’re able to build any kind of applications with CMS in minutes, no matter it is mobile, web and IoT. You are able to not only build a CMS with beautiful UI, but also maintainable and scalable CMS.

The demo code is at https://github.com/Canner/canner-html5up-demo/tree/master/html5up-lens, please download this repository before you start!

In this tutorial we will use, Firebase as database and [Canner](https://www.canner.io) as your CMS.

Your final website should like this: https://html5up-lens.firebaseapp.com/

![result](/docs/assets/tutorial-html5up/result.png)

### Your CMS result:

![cms-1](/docs/assets/tutorial-html5up/cms-1.png)

![cms-2](/docs/assets/tutorial-html5up/cms-2.png)

## 1. Download Canner/canner-html5up-demo

After you download `Canner/canner-html5up-demo` navigate to `html5up-lens`.

![file-structure](/docs/assets/tutorial-html5up/file-structure.png)

## 2. Create a new project at Firebase & install Firebase Tool

![firebase-create](/docs/assets/tutorial-html5up/firebase-create.png)

We’ll need later to host our website on Firebase. So you have to install Firebase CLI tool first. https://github.com/firebase/firebase-tools

```sh
npm install -g firebase-tools
```

## 3. Install @canner/cli

`@canner/cli` is a command line tools using [Canner](https://www.canner.io), that allows you to upload CMS schema, and upload initial data, … etc.

```sh
npm install -g @canner/cli
```

if you can’t install try yarn

```sh
yarn global add @canner/cli
```

And login your account

```sh
canner login
```

## 4. Create project at Canner

Login your [Canner](https://www.canner.io) account and create a project

![canner-create](/docs/assets/tutorial-html5up/canner-create.png)

Or you could create by command line

```sh
canner init
? Create a new app or select from existed apps (Use arrow keys)
❯ Select from existed apps
  Create a new app
```

select **"Create a new app"** , this will create a new project and init. If you create through website select **“Select from existed apps”** and select the app.

## 5. Replace ‘public/index.html’ & ‘canner.schema.js’ Firebase config

![firebase-config](/docs/assets/tutorial-html5up/firebase-config.gif)

```js
var config = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID"
};
```

Replace `public/index.html` & `./utils.js` firebase config to your config.

## 6. Download firebase private key

Because Canner CMS needs to integrate with your Firebase database, Firebase storage and more. So you have to download your private key on Firebase and put it in `cert/firebase `folder (create one in `htmlup-lens` folder).

![firebase-key](/docs/assets/tutorial-html5up/firebase-key.gif)

## 7. Deploy your website on Firebase

select your Firebase project in your command line

```sh
firebase init
```

Deploy static files

```sh
firebase deploy
```

You could check your website in local, using

```sh
firebase serve
```

And you could open your website at http://localhost:5000

## 8. Deploy your data to Firebase, schema to Canner

Deploy schema

```sh
canner script:deploy
```

Import data

```sh
canner data:import
```

Let’s it! Your website is now live! Like this website: https://html5up-lens.firebaseapp.com/ , Cheers!

You could build any CMS using Canner! Try it in your next Firebase project!