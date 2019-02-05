---
id: credential-firestore
title: Credential in Firestore
sidebar_label: Firestore
original_id: credential-firestore
---

We need your Firebase private key to access more control in your Firestore, such as more complete APIs, and storage APIs.

## Generating Firebase credential

Visit your Firebase console, and navigate to **Project settings** > **Service accounts** > **Generate new private key**, after downloading the private key and place wherever you want to put in the project.

![firebasesdk](/img/firebasesdk.gif)

## Setup Firestore credential in `canner.cloud.js`

In order to let Canner platfrom access to your Firestore you have to upload the credentials.

In your `canner.cloud.js`, setup `env` settings using `FirestoreCredential` in `canner-credential`.

**Example**

```js
const {FirestoreCredential} = require("canner-credential");

exports.graphql = {
  dataSources: {
    default: [new FirestoreCredential(require("path to your credential"))],
    test: [new FirestoreCredential(require("path to your credential"))]
  }
}
```

> Best practice: You should **ignore** your credentials in your git repository.