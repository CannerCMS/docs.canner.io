---
id: version-3.0.0-cli-cloud-data-import
title: canner data:import
sidebar_label: canner data:import
original_id: cli-cloud-data-import
---

> NOTE: Importing data feature is ONLY support Firebase realtime database

## Firebase realtime database

If you use **Firebase realtime database** as your database, `@canner/cli` will upload data to `firebase`, but the behavior is different from Canner. `@canner/cli` will compares the new data with old data in firebase, if same key exist in firebase, the new data will not be uploaded with error:  `firebase database had the same key 'user'`.

> `@canner/cli-firebase-tool` is a prerequisite for `canner data:import`, Canner CLI will automatically install for you.

Create `canner.data.js` in you root folder, this is the default file while we read the data.

> Learn more [`canner.data.js`](file-canner-data-js.md)

Command:

```
canner data:import [options] [filename]
```

### Original data
```js
  
{
  user: {
    name: 'lee',
    age: '25',
    read: [5]
  }
}
```

### New data
```js
  
{
  user: {
    name: 'lee',
    age: '25',
    read: [5]
  },
  posts: {
    randomId1: {
      title: 'first'
    }
  }
}
```

Use the option `-d, --drop-first` to force to update the data, for example：

### Origin data
```js
  
{
  user: {
    name: 'chen',
    age: '13',
    read: [1, 3, 4]
  },
  info: {
    phone: '0912345678'
  }
}
```

### New data
```js
  
{
  user: {
    name: 'lee',
    age: '25',
    read: [5]
  },
  posts: {
    randomId1: {
      title: 'first'
    }
  }
}
```

The data has `info` data after uploaded

```js
{
  user: {
    name: 'lee',
    age: '25',
    read: [5]
  },
  posts: {
    randomId1: {
      title: 'first'
    }
  },
  info: {
    phone: '0912345678'
  }
}
```

## Files

### canner.data.js


`canner.data.js` is the default file that `@canner/cli` reads when importing your default data. Your data inside `canner.data.js` should build correspondence with your `canner.schema.js` schema structure, and should export a `json`.

**example**
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

## .canner-image-uploaded.json


When importing data in your CLI this file records what the latest static files you upload to your service. To prevent you uploading the same static files again and again when uploading schema.

> NOTE: If the file is not changed, we will not upload it twice. And should be ignored in your git.