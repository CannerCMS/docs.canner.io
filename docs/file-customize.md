---
id: file-customize
title: Customize
sidebar_label: Customize
---

## Customize file path

If you want to use your own file naming, you could modify by adding key `schema`, `resolver`, `connector` in `.cannerrc`

In `.cannerrc`

```js
{
  ...
  schema: '<path to your>/custom.schema.js',
  resolver: '<path to your>/custom.resolver.js',
  connector: '<path to your>/custom.connector.js'
}
```