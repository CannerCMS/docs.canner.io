---
id: cli-app-use
title: canner app use
sidebar_label: canner app use
---

Specify the Canner app in this project. It shows all the apps to let you select or you can specify one with the option `--app-url, -a <app-url>`. After selecting an app, it creates the `.cannerrc` that recorded the app url in it.

## Generated files

- `.cannerrc`: The file recorded the app url of this project.

## Options

#### `app-url, -a <app-url>`
Specify the app url you want to use in this project.

## Examples

```bash
$ canner app:use # select from the app list
$ canner app:use --app-url square-king-4132 # specify the app with url square-king-4132
```