---
id: version-3.0.0-guides-internationalization
title: Internationalization (i18n)
sidebar_label: Internationalization (i18n)
original_id: guides-internationalization
---


## Supported i18n properties

The properties below supported i18n string.

- title
- description
- uiParams
- label
- options

## Usage

Add `cms.i18nMeesages` in your configuration file, and change text to `${(.*)}` format in your schema.

**i18nMeesages**

The text dictionary, which records the texts that every messageId represents in different locale. Canner will find the correct text from this dictionary, so you can just pass the `${<messageId>}` to string property.

**type**
```js
exports.cms = {
  i18nMeesages: {
    [locale: string]: {
      [messageId: string]: string
    }
  }
}
```

**example**

```js
// canner.server.js

exports.cms = {
  i18nMessages: {
    en: {
      productName: 'Product Name'
    },
    zh: {
      productName: '產品名'
    }
  }
};

// canner.schema.js
import CannerScript from 'canner-script';

export default (
  <root>
    <array keyName="products">
      <string keyName="name" title="${productName}" />
    </array>
  </root>
)
```
