---
id: cli-cloud-data-import
title: canner data:import
sidebar_label: canner data:import
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