---
id: cli-cloud-init
title: canner cloud:init
sidebar_label: canner cloud:init
---

Initialize the project, the combination of `canner app:use` and `canner init`. It launches a interactive CLI wizard to help you select a template schema and a Canner app. Only works after logging in.

If your don't have any Canner app yet, it creates one automatically for you.

### Generated files

- `.cannerrc`: Store the app temporary information.
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
$ canner cloud:init # initialize schema, canner.cloud.js, and canner.server.js
$ canner cloud:init -s # initialize schema
$ canner cloud:init -sc # initialize schema and canner.cloud.js
```