---
id: cli-production
title: Production
sidebar_label: Production
---

Deploy your CMS to canner.io by entering 

```
canner script:deploy
```

## Setting up production environment

To setup production environment, in your `canner.config.js` set your key `default` in `env` to your resource.

Example:

```json
{
  env: {
    default: "firebase/<product-id>"
  }
}
```

## Serving production environment

Serving production environment locally by enter

```
canner script:serve --env prod
```