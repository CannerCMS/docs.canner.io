---
id: start-quick-intro
title: Introduction
sidebar_label: Introduction
---

Canner make **CMS simple and easy**. We help companies to build scalable and extendable CMS infrastructure.

Our vision is to create **ONE** CMS framework to solve most usages from any datasources.

> Canner is an agile Content Management System for faster delivery and stability with any data sources.

Result! Save up to 80% of your CMS development time.

![roi](/docs/assets/start-intro/compare-canner.png)

It only takes three steps to build your CMSes using Canner.

### 1. Install CLI

```bash
$ npm install -g @canner/cli
```

To check if you install success, type `canner`.

```bash
➜  canner git:(develop) ✗ canner
Usage:  [options] [command] <cmd>

Options:
  -V, --version                       output the version number
  -h, --help                          output usage information

Commands:
  login                               Login to Canner
  logout                              Logout
  whoami                              Display account info
  init [options] [url]                Initialize project
  init:schema [options]               Initialize schema
  open:dashboard                      Open your project dashboard
  app:list [options]                  List all your projects in Canner
  app:create [options]                Create a project in Canner
  script:deploy [options] [filename]  Bundle and Deploy your schema and UI components to Canner.
  script:serve [options] [filename]   Serve your CMS in local
  start [options]                     Serve your statics files
  static:build [options] [filename]   Serve your CMS in local
  data:import [options] [filename]    Import default data to your data source

  Examples:

    Intitialize schemas with templates:
    $ canner init:schema

    Serving CMS:
    $ canner script:serve
```

### 2. Build your Schema

The core concept of Canner is to use a simple CMS schema that you can assemble any use cases.

You can check out [here](/docs/schema-overview)

### 3. Deploy your CMS

After you build your CMS, you can select host by [your own](/docs/start-quick-community) or using [Canner platform](https://www.canner.io).

If you select to deploy to Canner

Login Canner:

```bash
$ canner login
```

Initialize your application in your local machine

```bash
$ canner init
```

if you want to init to your organization

```bash
$ canner init --org-url [orgUrl]
```

Deploy CMS on Canner

```bash
$ canner script:deploy
```

## Next

Quick start for 

- [Firebase - Realtime database](tutorial-connect-to-firebase)
- [Firebase - Firestore](credential-firestore)
- [Prisma - GraphQL](tutorial-connect-to-prisma)