---
id: version-3.0.0-tutorial-community-firebase
title: Firebase CMS with NextJS (Community edition)
sidebar_label: Firebase CMS with NextJS (Community edition)
original_id: tutorial-community-firebase
---

Canner is a open source CMS framework that you could build from any kind of different sources. And one of most common use cases is integrate with [Firebase](https://firebase.google.com/).

In this tutorial, we are going to help you build your CMS using Canner(Community edition) with [NextJS](https://nextjs.org/) and deploy to [Now](https://zeit.co/now). Get source code please go to [Canner/canner-firebase-cms](https://github.com/Canner/canner-firebase-cms) 

> Terms
> - **Firebase** is one of the biggest BaaS (Backend as a service) service nowadays, that is backed by Google.
> - **NextJS** is a small framework for server-rendered universal JavaScript webapps.
> - **Now** is a deployment service.

Your final result, live demo: https://canner-firebase.now.sh/

![preview](/docs/assets/tutorial-firebase/preview/1.png)

![preview](/docs/assets/tutorial-firebase/preview/4.png)


## 1. Clone Github repository

Please clone the repository [on Github Canner/canner-firebase-cms](https://github.com/Canner/canner-firebase-cms)

## 2. Install prerequisite packages

> Install `npm` to your machine if you don't have one yet.
> - Windows: NPM - [install in Windows](https://docs.npmjs.com/getting-started/installing-node#microsoft-windows)
> - Mac OS: NPM - [install in Mac OS X](https://docs.npmjs.com/getting-started/installing-node#apple-macos)

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

1. First of all, install needed packages navigate to the root of the folder and enter:
    ```sh
    npm install
    ```

2. Install **Firebase tool** , a command line interface (CLI) tools, that helps you control your Firebase project through command line.

    ```sh
    npm install -g firebase-tools
    ```

> Learn more about [firebase-tools](https://github.com/firebase/firebase-tools)
3. Install **Now CLI** ,  a command line interface (CLI) tools, that helps you deploy your web app to now,

    ```sh
    npm install -g now
    ```

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
➜  canner-firebase-cms git:(master) firebase use test-firebase-778be
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

And replace it in `src/schema/utils/index.js` in your project.

## 6. Write you CMS schema, resolver, connector

Now, create your own CMS!

You'll find a file called `canner.schema.js`. Rewrite with your own settings.

> Learn to [write schema](guides-schema-overview.md)

If you want to try for now, you could use default scripts.


## 7. Bundle your script and deploy

Bundle up your scripts and deploy it to **Now**. Just enter `now`:

```sh
$ now
```

And then you'll get a response URL, where now host your service on `https://canner-firebase-cms-<HASH>.now.sh`.

In this case, shown as below

```sh
> NOTE: You can use `now --public` or upgrade your plan (https://zeit.co/account/plan) to skip this prompt
> Synced 3 files (256.1KB) [2s]
> Using Node.js 8.11.3 (default)
> https://canner-firebase-cms-upidizmgzw.now.sh [in clipboard] (sfo1) [2s]
> Building…
> ▲ yarn
> yarn install v1.9.4
> [1/4] Resolving packages...
> [2/4] Fetching packages...
```