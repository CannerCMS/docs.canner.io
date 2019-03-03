---
id: cli-overview
title: Overview
sidebar_label: Overview
---

## Installation

Make sure you have already installed NodeJS and use the command below to install `@canner/cli` globally. And as the [official NPM docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) mentioned, we also recommend using a Node version manager to prevent the [EACCES issue](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) if you need to install `@canner/cli` with `sudo`.


```shell
$ npm install -g @canner/cli
```

Check the installation with

```shell
$ canner --version
```
#### Note
- Your Node version must at least >= 6.10. 
#### Troubleshooting

- [Canner issue - EACCES: permission denied](https://github.com/Canner/canner/issues/139)
- [Stackoverflow - "Error: EACCES: permission denied"](https://stackoverflow.com/questions/38323880/error-eacces-permission-denied)


## Commands

Commands can be grouped into three categories, **OSS for self-hosting**, **Cloud for Canner platform**, and **common commands**.

### Common
- **[canner init](cli-init)** - Initialize `canner.schema.js`, `schema/*.schema.js`, one of `canner.server.js` and `canner.cloud.js`.
  - *--only-schema, -s*
  - *--only-cloud, -c*
  - *--only-server, -S*

### OSS (self-hosting)
- **[canner start](cli-start)** - Build the CMS and run the GrapQL server.
- **[canner start:cms](cli-start-cms)** - Run the CMS server including build the static files of the CMS.
- **[canner start:graphql](cli-start-graphql)** - Run the GrapQL server.
- **[canner start:auth](cli-start-auth)** - Run the auth server.

### Cloud
- **[canner cloud:signup](cli-cloud-signup)** - Open browser to Canner sign up page.
- **[canner cloud:login](cli-cloud-login)** - Login with Canner Account.
- **[canner cloud:logout](cli-cloud-logout)** - Logout.
- **[canner cloud:deploy](cli-cloud-deploy)** - Deploy the schemas and the server to Canner platform.
- **[canner cloud:preview](cli-cloud-preview)** - Run `webpack-dev-server` for developers to develop quick.
- **[canner cloud:whoami](cli-cloud-whoami)** - Check the identity of current account.
- **[canner cloud:dashboard](cli-cloud-dashboard)** - Open the dashboard on the browser.
- **[canner cloud:init](cli-cloud-init)** - Initialize the project, the combination of `canner app:use` and `canner init`.
- **[canner app:use](cli-app-use)** - Select one app on Canner, create the `.cannerrc` in project root.
  - *--app-url, -a \<app-url>* - Specify the app.
- **[canner app:create](cli-app-create)** - Create one app on Canner, create the `.cannerrc` in project root.
  - *--app-name, -a \<app-name>*- The app name
- **[canner app:list](cli-app-list)** - List the user's app list.