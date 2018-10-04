---
id: guides-internationalization
title: Internationalization (i18n)
sidebar_label: Internationalization (i18n)
---


## Supported i18n properties

The properties below supported i18n string.

- title
- description
- uiParams
- label
- options
- placeholder

## Usage

Write the i18n `dict` and pass it to `<root />`, and change the text to `${<id>}` format.

**example**

```js
// canner.schema.js
/** @jsx builder */
import builder from 'canner-sript';

const dict = {
  en: {
    productName: 'Product Name'
  },
  zh: {
    productName: '產品名'
  }
};

export default (
  <root dict={dict}>
    <array keyName="products">
      <string keyName="name" title="${productName}" />
    </array>
  </root>
)
```
