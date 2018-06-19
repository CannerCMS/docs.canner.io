---
id: file-canner-schema-js
title: canner.schema.js
sidebar_label: canner.schema.js
---

`canner.schema.js` is the file describing the schema of your data, it's writed with `jsx` language which is just like html tag and easy to learn.

> Learn more about [Canner Schema](guides-writing-schema.html)

## Example of canner.schema.js

> NOTE: you'will need to install `cannner-script`, know more about [Canner Script](advance-canner-script.html)

***Remember to add the first two lines***

```js
/** @jsx c */
import c from 'canner-script';

export default (
  <root>
    <object keyName="info">
      <string keyName="name" />
    </object>
    <array keyName="posts" uiParams={{
      columns: [{
        title: 'Title',
        dataIndex: 'title'
      }]
    }}>
      <string keyName="title" />
      <string keyName="content" ui="textarea" />
    </array>
  </root>
)
```