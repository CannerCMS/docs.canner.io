---
id: version-2.8.3-guides-default-value
title: Default Value
sidebar_label: Default Value
original_id: guides-default-value
---

## Usage

Add the `defaultValue` property in your data type tag to set the default value when creating. You can also pass a function in `defaultValue` so that you can set a random value.

```js
import CannerScript from 'canner-script';
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
