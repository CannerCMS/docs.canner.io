---
id: version-3.0.0-file-canner-schema-js
title: canner.schema.js
sidebar_label: canner.schema.js
original_id: file-canner-schema-js
---

`canner.schema.js` is the file describing the schema of your data, how should it be connected, and how your CMS should looks like.

It is written in `jsx` language which is just like html tags and easy to learn.

> Learn more about [Canner Schema](guides-writing-schema.html)

## Schema files

Schema can seperate to multiple files, **but must end with `.schema.js`**.

> The default entry of schema in CLI is `canner.schema.js` you could change the entry file by passing parameter in command line tool.

## Example of canner.schema.js

***Remember to import `canner-script`, and variable must be called `CannerScript` this is needed!***

```js
import CannerScript from 'canner-script';
```

**Example**

```js
import CannerScript from 'canner-script';

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

## Customize file naming

You could using CLI tool to indicate the filename.

```sh
canner cloud:deploy [filename]
```

Alternatively, you could add setting `schema` in `.cannerrc`.

In `.cannerrc`

```js
{
  ...
  schema: '<path to your>/custom.schema.js'
}
```