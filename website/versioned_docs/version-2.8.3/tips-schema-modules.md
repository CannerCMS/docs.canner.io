---
id: version-2.8.3-tips-schema-modules
title: Schema as Modules
sidebar_label: Schema as Modules
original_id: tips-schema-modules
---

In real world use cases, schema can be really complex, you could seperate them to several files to help you build maintainable code.

> Note that, files must end with `*.schema.js`. Since only `*.schema.js` files will go through our compilation.

***info.schema.js***

```js
import CannerScript from 'canner-script';

modules.export = (
  <object keyName="info">
    <string keyName="firstname" />
    <string keyName="lastname" />
  </object>
);
```

***canner.schema.js***
```jsx
import CannerScript from 'canner-script';
import Info from './info.schema.js';

modules.export = (
  <root>
    <Info />
  </root>
);
```
