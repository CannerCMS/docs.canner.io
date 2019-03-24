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
Usage: cli [options] [command] <cmd>

Options:
  -V, --version                       output the version number
  -h, --help                          output usage information

Commands:
  app:create [options]                Create a project in Canner
  app:list [options]                  List all your projects in Canner
  app:use [url]                       Specify a Canner app
  cloud:dashboard                     Open your project dashboard
  cloud:deploy [options]              Bundle and Deploy your schema and UI components to Canner.
  cloud:init [options] [url]          Initialize project
  cloud:login                         Login to Canner
  cloud:logout                        Logout
  cloud:preview [options] [filename]  Host your CMS locally to preview.
  cloud:signup                        Register an account of Canner
  cloud:whoami                        Display account info
  init [options]                      Initialize Canner files
  start [options]                     Build your CMS with authentication and GraphQL server
  start:production [options]          Build your CMS with authentication and GraphQL server for production
  build [options]                     Build the static files and canner.schema.json

  Examples:

    Intitialize files: "canner.schema.js", "canner.cloud.js", "canner.server.js"
    $ canner init

    Host CMS:
    $ canner start
```

Hooray! You are ready to go!

> Learn more about [commands](cli-overview.md)

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
