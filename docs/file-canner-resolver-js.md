---
id: file-canner-resolver-js
title: canner.resolver.js
sidebar_label: canner.resolver.js
---

`canner.resolver.js` should export a resolver object, each key **must** match with your data's key.

> Learn more about [Resolvers](http://framework.canner.io/docs/guides-resolver.html)

**canner.resolver.js**

```js
// ...
module.exports = {
  posts: postsResolver,
  info: infoResolver
}
```