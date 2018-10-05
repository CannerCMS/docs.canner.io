---
id: file-canner-data-js
title: canner.data.js
sidebar_label: canner.data.js
---

`canner.data.js` is the default file that `@canner/cli` reads when [importing your default data](cli-import-data.md). Your data inside `canner.data.js` should build correspondence with your `canner.schema.js` schema structure, and should export a `json`.

## Example

```js
module.exports = {
  "object1": {
    "name": "Hello object 1",
    "description": "I am object 1"
  },
  "object2": {
    "name": "Hello object 2",
    "description": "I am object 2"
  },
  "array1": [
    {
      "name": "Array item1"
    }
  ],
  "array2": [
    {
      "name": "Array item2"
    }
  ]
};
```