---
id: version-3.0.0-cli-app-create
title: canner app create
sidebar_label: canner app create
original_id: cli-app-create
---

Create an new Canner app, you can specify the app name with the option `--app-name, -a`. Free plan users can only have one project, so the command will throw error.

## Options

#### `--app-name, -a <app-name>`

Specify the app name of the new Canner app.

## Examples

```bash
$ canner app:create # create a new app with random name
$ canner app:create --app-name myApp # create a new app with name myApp
```
