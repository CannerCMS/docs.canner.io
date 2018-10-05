---
id: guides-default-value
title: Default Value
sidebar_label: Default Value
---

## Usage

Add the `defaultValue` property in your data type tag to set the default value when creating. You can also pass a function in `defaultValue` so that you can set a random value.

```js
/** @jsx builder */
import builder from 'canner-script';
import shortId from 'shortid';
export default (
  <root>
    <array keyName="products" ui="tableRoute">
      <string keyName="no" defaultValue={() => shortId.generate()}/>
      <number keyName="order" defaultValue={1}/>
      {...}
    </array>
  </root>
)
```



## Limitation

- only works in `<array ui="tableRoute">` for now
