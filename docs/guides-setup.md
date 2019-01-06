---
id: guides-setup
title: Setup
sidebar_label: Setup
---


First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

## Install `@canner/cli`

Through npm:

```sh
$ npm install -g @canner/cli
```

## Check if install successfully

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

## Initial Your Schema

Before starting developing your CMS, you must create the `canner.schema.js` with the command `canner init:schema` and edit your schema following the [schema guides](schema-overview).

Here is the schema of a simple company website

**canner.schema.js**
```jsx
import CannerScript from 'canner-script';

export default (
  <root>
    <object keyName="header" title="Main page">
      <string keyName="icon" title="Website icon" />
      <string keyName="title" title="Website title" />
      <object keyName="description" title="Description" ui="editor" />
      <image keyName="background" title="Background" />
      <string keyName="copy" title="Copyright" />
    </object>
    <object keyName="intro" title="Introduction page">
      <string keyName="title" title="Intro title" />
      <object keyName="content" title="Intro content" ui="editor" />
      <image keyName="image" title="Intro image" ui="image" />
    </object>
    <object keyName="work" title="Work page">
      <string keyName="title" title="Work title" />
      <object keyName="content" title="Work content" ui="editor" />
      <image keyName="image" title="Work image" ui="image" />
    </object>
    <object keyName="about" title="About page">
      <string keyName="title" title="About title" />
      <object keyName="content" title="About content" ui="editor" />
      <image keyName="image" title="About image" ui="image" />
    </object>
    <object keyName="contact" title="Contact me">
      <string keyName="title" title="Contact title" validation={{format: 'url'}} />
      <object keyName="facebook">
        <string keyName="link" title="Your Facebook link" ui="link" validation={{format: 'url'}} />
      </object>
      <object keyName="github">
        <string keyName="link" title="Your Github link" ui="link" validation={{format: 'url'}} />
      </object>
      <object keyName="twitter">
        <string keyName="link" title="Your Twitter link" ui="link" validation={{format: 'url'}} />
      </object>
      <object keyName="instagram">
        <string keyName="link" title="Your Instagram link" ui="link" validation={{format: 'url'}} />
      </object>
    </object>
  </root>
);
```
