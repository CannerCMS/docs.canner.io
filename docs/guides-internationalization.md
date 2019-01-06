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

Write the i18n `dict` and pass it to `<root />`, and change the text to `${(.*)}` format.

**dict**

The text dictionary, which records the texts that every messageId represents in different locale. Canner will find the correct text from this dictionary, so you can just pass the `${<messageId>}` to string property.

**type**
```
{
  dict: {
    [locale: string]: {
      [messageId: string]: string
    }
  }
}
```

**example**

```js
// canner.schema.js
import CannerScript from 'canner-script';

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
