---
id: tips-schema
title: Tips for CMS schema
sidebar_label: Schema
---

## Schema as modules

In real world use cases, schema can't be simple as the example above, so you could seperate them to several files.

> Note that, files should also end with `*.schema.js`

***info.schema.js***

```js
/** @jsx builder */
import builder from 'canner-script';

modules.export = (
  <object keyName="info">
    <string keyName="firstname" />
    <string keyName="lastname" />
  </object>
);
```

***canner.schema.js***
```jsx
/** @jsx builder */
import builder from '@canenr/canner-script';
import Info from './info.schema.js';

modules.export = (
  <root>
    <Info />
  </root>
);
```

## Reusable components

One of common tips for building CMS schema, is to wrap partial reusable component into functions.

> Remember to pass the correct attributes with `attributes` and `children`. 

```javascript
const Img = ({attributes, children}) => (
  <object keyName={attributes.keyName}>
    <string keyName="imageName" title="imageName" />
    <file keyName={attributes.srcKey} title="imageSrc" contentType="images/*" />
  </object>
);

// so you can use it like
<Img keyName="myImage" srcKey="imageSrc"/>

```

Data will be like

```js
{
  myImage: {
    imageName: string,
    imageSrc: string // imageUrl
  }
}
```