---
id: data-source-mongodb
title: Mongodb
sidebar_label: Mongodb
---

After [initialize your Prisma project](https://www.prisma.io/docs/reference/cli-command-reference/database-service/prisma-init-eeb1ohr4ec), you can find a file called [`prisma.yml`](https://www.prisma.io/docs/reference/service-configuration/prisma.yml/overview-and-example-foatho8aip), which provide your configuration of the service.

## Setup Prisma credential in `canner.cloud.js`

In your `canner.cloud.js`, setup `env` settings using `PrismaCredential` in `canner-credential`.

**Example**

```js
const {PrismaCredential} = require("canner-credential");

module.exports = {
  env: {
    default: [new PrismaCredential("path to prisma.yml")],
    test: [new PrismaCredential("path to prisma.yml")]
  }
}
```

> Best practice: You should **ignore** your credentials in your git repository.