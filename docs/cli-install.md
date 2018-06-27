---
id: cli-install
title: Install Canner CLI
sidebar_label: Install Canner CLI
---


First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least 6.x.

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
  Usage: canner [options] [command] <cmd>


  Options:

    -V, --version   output the version number
    -h, --help      output usage information

  Commands:

    login
    logout
    whoami
    init [url]
    init:schema [options]
    open:dashboard
    app:list
    app:create
    script:deploy [options] [filename]
    script:serve [filename]
    data:import [options] [filename]
```

Hooray! You are ready to go!

> Learn more about [commands](cli-commands.md)