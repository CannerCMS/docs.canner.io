---
id: cli-development
title: Development
sidebar_label: Development
---

We try to make development Canner in local environment as easy as possible.  You can easily serve your Content Management in your local machine by running

```sh
canner script:serve
```

## Serving with fake data

Serve with fake data

```sh
canner script:serve --env fake
```

Add `-l, --list-length <listLength>` to specify number of items of array data to be generated


## Serving with environments

You might want to serve locally with data in different environments.

```sh
canner script:serve --env [environment]
```

Each environments can be set in [`canner.cloud.js`](cli-canner-cloud-js#environment-env)'s `env` settings. The local server will automatically connect with correspondent environments.

