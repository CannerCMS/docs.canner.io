---
id: file-canner-resolver-js
title: canner.resolver.js
sidebar_label: canner.resolver.js
---

> `canner.resolver.js` is optional, if you don't need to customize your data flow you don't need it.

`canner.resolver.js` should export a resolver object, each key **must** match with your data's key.

> Learn more about [Resolvers](http://framework.canner.io/docs/guides-resolver.html)

**canner.resolver.js**

```js
// ...
export default {
  posts: postsResolver,
  info: infoResolver
}
```

If you don't need any resolvers, you can just exports a empty object or delete the file.

**canner.resolver.js**

```js
export default {}
```
