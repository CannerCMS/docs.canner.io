---
id: cli-init
title: canner init
sidebar_label: canner init
---


Initialize the project files such as schemas and configuration files under the currect directory, it launches an interactive CLI wizard to help you select a schema templete and make sure you wouldn't delete any schemas or files if they already existed.

### Generated files

- `canner.schema.js and schema/\*.schema.js`:
The schema of the CMS, defines the data model and UI.
- `components/\*.js`:
The customized components, not every project would have this.
- `canner.server.js`:
The configuration of **OSS** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.
- `canner.cloud.js`:
The configuration of **Cloud** version, you can change the *dataSources*, *i18n*, *sidebar*, *style*, ...etc.


### Options

#### `--schema-only, -s`
Only initialize the schema and customized components.

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