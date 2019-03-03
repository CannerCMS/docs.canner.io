---
id: cli-init
title: canner init
sidebar_label: canner init
---


Initialize the project files such as schemas and configuration files under the currect directory, it launches an interactive CLI wizard and follow the steps to create your projects.

### Generated files

- `canner.schema.js and schema/\*.schema.js`:
The schema of the CMS, defines the data model and UI.
- `components/\*.js`:
The custom components, not every project would have this.
- `canner.server.js`:
The configuration of **OSS** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.
- `canner.cloud.js`:
The configuration of **Cloud** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.


### Options

#### `--schema-only, -s`
Only initialize the schema and custom components.

#### `--cloud-only, -c`
Only initialize the `canner.cloud.js`.

#### `--server-only, -S`
Only initialize the `canner.server.js`.


### Examples

```sh
$ canner init # initialize schema, canner.cloud.js, and canner.server.js
$ canner init -s # initialize schema
$ canner init -sc # initialize schema and canner.cloud.js
```