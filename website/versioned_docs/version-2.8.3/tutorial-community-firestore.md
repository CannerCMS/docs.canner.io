---
id: version-2.8.3-tutorial-community-firestore
title: Firestore CMS (Community edition)
sidebar_label: Firestore CMS (Community edition)
original_id: tutorial-community-firestore
---

In this tutorial, you can learn how to build your own **[Firestore]((https://firebase.google.com/docs/firestore/)) CMS** on your Firebase hosting. And build any kind and form of CMS by using it. Get source code please go to [Canner/canner-firestore-cms](https://github.com/Canner/canner-firestore-cms) 

Your final result, live demo: https://fir-cms-15f83.firebaseapp.com

![preview](/docs/assets/tutorial-firebase/preview/1.png)

![preview](/docs/assets/tutorial-firebase/preview/4.png)


## 1. Clone Github repository

Please clone the repository on Github [Canner/canner-firestore-cms](https://github.com/Canner/canner-firestore-cms)

## 2. Install prerequisite packages

> Install `npm` to your machine if you don't have one yet.
> - Windows: NPM - [install in Windows](https://docs.npmjs.com/getting-started/installing-node#microsoft-windows)
> - Mac OS: NPM - [install in Mac OS X](https://docs.npmjs.com/getting-started/installing-node#apple-macos)

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

First of all, install needed packages navigate to the root of the folder and enter:

```sh
npm install
```

And install **Firebase tool** , `firebase-tools` is a Firebase command line interface (CLI) tools, that helps you control your Firebase project through command line.

```sh
npm install -g firebase-tools
```

> Learn more about [firebase-tools](https://github.com/firebase/firebase-tools)

## 3. Create a new project on Firebase

Go to https://firebase.com and create a new app as below

![create app](/docs/assets/tutorial-firebase/create-firebase-app.png)

Go to **Project settings**

![project settings](/docs/assets/tutorial-firebase/project-settings.png)

And remember your `projectId` of this project

![project id](/docs/assets/tutorial-firebase/project-id.png)


Now go back to your command line and enter

```sh
firebase use <your project id>
```

In here for example enter:

```sh
firebase use test-firebase778be
```

Your get feedback as below

```sh
➜  canner-firestore-cms git:(master) firebase use test-firebase-778be
Now using project test-firebase-778be
```

## 4. Import default users

Now we're going to import a default user in your CMS.

Enter

```sh
firebase auth:import firebase-default-user.json
```

This will import a new user in **Firebase auth**, you could find out a new record in **Firebase Authentication** panel.

![new user](/docs/assets/tutorial-firebase/new-user.png)

Here's the admin user's username and password

- Username: `admin-test@canner.io`
- Password: `admin-test`

You could reset password, or create new user in **Firebase Authentication** panel as you wish!

## 5. Setup your project

Now we're going to setup our CMS to fetch data from your new Firebase app.

Go to **Project settings**

![project settings](/docs/assets/tutorial-firebase/project-settings.png)

And click **Add Firebase to your web app**

![setting web](/docs/assets/tutorial-firebase/setting-web.png)

This will popup a new window shows the configuration of your Firebase in web.

![web config](/docs/assets/tutorial-firebase/web-config.png)

copy the `config` in the script, in this case

```js
{
  apiKey: "AIzaSyC3eGspF0eVXtjB3tKP2sfU-XQ3IOi83vk",
  authDomain: "test-firebase-778be.firebaseapp.com",
  databaseURL: "https://test-firebase-778be.firebaseio.com",
  projectId: "test-firebase-778be",
  storageBucket: "test-firebase-778be.appspot.com",
  messagingSenderId: "208854346667"
}
```

And replace it in `schema/utils/index.js` in your project.

## 6. Write you CMS schema, resolver, connector

Now, create your own CMS!

You'll find a file called `canner.schema.js` in the schema folder. Rewrite with your own settings.

> Learn to [write schema](guides-write-schema.md)

If you want to try for now, you could use default scripts.


## 7. Bundle your script and deploy

Bundle up your scripts and deploy it to **Firebase Hosting**, command below will build your script into new folder called `public`.

```sh
npm run build
```

Finally, enter deploy your CMS.

```sh
firebase deploy --only hosting
```

You'll probably get a response URL, where Firebase host your service on `*.firebaseapp.com`.

In this case, shown as below

```sh
➜  canner-firestore-cms git:(master) firebase deploy --only hosting

=== Deploying to 'test-firebase-778be'...

i  deploying hosting
i  hosting: preparing public directory for upload...
✔  hosting: 30 files uploaded successfully

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/test-firebase-778be/overview
Hosting URL: https://test-firebase-778be.firebaseapp.com
```
