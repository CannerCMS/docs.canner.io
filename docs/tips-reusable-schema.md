---
id: tips-reusable-schema
title: Reusable Schema Components
sidebar_label: Reusable Schema Components
---

One of common tips for building CMS schema, is to wrap partial reusable component into functions.

> Remember to pass the correct attributes with `attributes` and `children`. 

```jsx
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

```json
{
  myImage: {
    imageName: string,
    imageSrc: string // imageUrl
  }
}
```
