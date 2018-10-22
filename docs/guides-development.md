---
id: guides-development
title: Development
sidebar_label: Development
---

## Introduction

We try to make developing Canner in local environment as easy as possible. You can easily serve and preview your Content Management System in your local machine by running

## Local Serving

Ensure that there is a file called `canner.schema.js` in the current working directory and enter the command `canner srcipt:serve`, you will get your CMS running in [http://localhost:9090](http://localhost:9090).

```sh
$ canner script:serve
$ ⠋ Building CMS...No canner.cloud.js find
$ ℹ Starting CMS server on http://localhost:9090
```

By default, `script:serve` is using the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) as the storage, you can click the `reset` button at the top-right corner to reset localStorage.

## Changing Number of Items in an Array

We provide the `-l, --listLength` option for you to edit the number of fake items in an array.

```sh
$ canner script:serve --listLength 50
$ canner scfript:serve -l 50
```

## Previewing with Environments

You might want to preview your data locally with real data sources in different environments.

```sh
$  canner script:serve --env [environment]
```

Each environment can set in [`canner.cloud.js`](cli-canner-cloud-js#environment-env)'s `env` settings. The local server will automatically connect with correspondent environments.

