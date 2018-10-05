---
id: cli-production
title: Production
sidebar_label: Production
---

Deploy your CMS to canner.io by entering 

```sh
canner script:deploy
```

## Setting up production environment

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

## Serving production environment

Serving production environment locally by enter

```sh
canner script:serve --env prod
```