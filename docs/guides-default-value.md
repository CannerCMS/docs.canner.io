---
id: guides-default-value
title: Default Value
sidebar_label: Default Value
---

## usage

Add the `defaultValue` property in your data type tag to generate the default value when creating.

```js
/** @jsx builder */
import builder from 'canner-script';
import shortId from 'shortid';
export default (
  <root>
    <array keyName="products" ui="tableRoute">
      <string keyName="no" defaultValue={shortId.generate()}/>
      <number keyName="order" defaultValue={1}/>
      {...}
    </array>
  </root>
)
```

## Limitation

- only works in `<array ui="tableRoute">` for now



