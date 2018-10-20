---
id: cli-development
title: Development
sidebar_label: Development
---

We try to make developing Canner in local environment as easy as possible.  You can easily serve and preview your Content Management System in your local machine by running

```sh
canner script:serve
```

## Default

Preview with localstorage. Run command below, will preview your CMS with localstorage.

```sh
canner script:serve
```

## Previewing with fake data

```sh
canner script:serve --env fake
```

Add `-l, --list-length <listLength>` to specify number of items of array data to be generated


## Previewing with environments

You might want to preview your data locally with real data sources in different environments.

```sh
canner script:serve --env [environment]
```

Each environment can set in [`canner.cloud.js`](cli-canner-cloud-js#environment-env)'s `env` settings. The local server will automatically connect with correspondent environments.

