---
id: guides-deployment
title: Deployment
sidebar_label: Deployment
---

## Introduction

Just two files [canner.schema.js](guides-setup#intitialyourschema) and [cloud.config.js](cli-cloud-config-js), and then you can publish your CMS on Canner with the simple command.

```
$ canner script:deploy
```

## Deploy CMS with LocalStorage as the Storage

The code below is the simplest `cloud.config.js` which represents using localStorage as the storage in your CMS. 

**cloud.config.js**
```
module.exports = {
  env: {
    default: []
  }
}
```

Then you can deploy your schema by entering

```sh
$ canner script:deploy
```

## Setting Up Production Environment

To setup production environment, in your `canner.config.js` set your key `default` in `env` to your resource.

Example:

```js
const {FirebaseCredential} = require("canner-credential");

module.exports = {
  env: {
    default: [new FirebaseCredential(firebaseJSON)]
  }
}
```

> Learn more about [environment settings](cli-canner-cloud-js#environment-env)
