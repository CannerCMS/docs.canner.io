---
id: cli-installation
title: Installation
sidebar_label: Installation
---


First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

### Install `@canner/cli`

Through npm:

```sh
$ npm install -g @canner/cli
```

or yarn

```sh
$ yarn global add @canner/cli --prefix /usr/local
```

### Check if install successfully

Enter 

```
canner --help
```

You will get all available commands, and help menu.

```shell
Usage:  [options] [command] <cmd>

  Options:

    -V, --version                       output the version number
    -h, --help                          output usage information

  Commands:

    login                               Login to Canner
    logout                              Logout
    whoami                              Display account info
    init [url]                          Initialize project
    init:schema [options]               Initialize schema
    open:dashboard                      Open your project dashboard
    app:list                            List all your projects in Canner
    app:create                          Create a project in Canner
    script:deploy [options] [filename]  Bundle your CMS and deploy it to Canner
    script:serve [options] [filename]   Serve your CMS in local
    data:import [options] [filename]    Import default data to your data source

  Examples:

    Intitialize schemas with templates:
    $ canner init:schema

    Serving CMS:
    $ canner script:serve
```

Hooray! You are ready to go!

> Learn more about [commands](cli-commands.md)