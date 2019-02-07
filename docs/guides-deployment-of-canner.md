---
id: guides-deployment-of-canner
title: Deploy to Canner
sidebar_label: Deploy to Canner
---

## Introduction

> Note: The current dataSources in `canner.cloud.js` will change in the near future.

Building a CMS on Canner only need two main files [canner.schema.js](guides-setup#initial-your-schema) and [canner.cloud.js](cli-canner-cloud-js), and then you can publish your CMS on Canner with the simple command.

```
$ canner script:deploy
```

## Deploy CMS with Memory Data Source as the Storage

The code below is the simplest `cloud.config.js` which represents using memory as the default storage in your CMS. 

**cloud.config.js**

```js
exports.graphql = {
  dataSources: {
    env: {
      default: []
    }
  }
}
```

Then you can deploy your schema by entering

```sh
$ canner script:deploy
```

## Setting Up Production Environment

To setup **production** environment, in your `canner.cloud.js` set your key `default` in `env` to your resource.

Example:

```js
const {FirebaseCredential} = require("canner-credential");

exports.graphql = {
  dataSources: {
    default: [new FirebaseCredential(firebaseJSON)]
  }
}
```

> Learn more about [environment settings](cli-canner-cloud-js#environment-env)
