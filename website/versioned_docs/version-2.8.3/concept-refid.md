---
id: version-2.8.3-concept-refid
title: What is RefId?
sidebar_label: What is RefId?
original_id: concept-refid
---

`RefId` is a significant and essential concept in Canner CMS. This is how CMS schema in Canner CMS refer to data from your data sources.

> Normally, you don't need to handle `RefId` yourself, since it is managed by our framework.

> Full list of [RefId APIs](https://github.com/Canner/canner/tree/canary/packages/canner-ref-id)

Here an example how we reference to a specific data in an object:

```js
{
  user: {
    owner: {
      howard: {
        email: "howard@email.com"
      },
      william: {
        email: "william@email.com"
      }
    },
    others: {
      bob: {
        email: "bob@email.com"
      }
    }
  }
}
```

Here how we refer to howard's email

```js
const refId = new CannerRefId("user/owner/howard/email")
```

refer to others list:

```js
const refId = new CannerRefId("user/others");
```

As for Arrays, here an example below

```js
{
  waitList: [
    {
      name: "howard",
      email: "howard@email.com"
    },
    {
      name: "william",
      email: "william@email.com"
    },
    {
      name: "bob",
      email: "bob@email.com"
    }
  }
}
```

Here's how to refer to william's email

```js
// william is in index `1`
const refId = new CannerRefId("waitList/1/email");
```