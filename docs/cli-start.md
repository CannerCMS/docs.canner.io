---
id: cli-start
title: canner start
sidebar_label: canner start
---

For development, it hosts the CMS, provides the GraphQL and authentication APIs at the same time. Unlike [canner start:production](cli-start:production.md), this command watches your files such as schemas and react components, and reloads your website when those files change. It's helpful for you to develop your schema. To use this command, there must be `canner.schema.js` and `canner.server.js` under the currect working directory.


### Generated files

- `canner.schema.json` - The JSON of your canner schema.
