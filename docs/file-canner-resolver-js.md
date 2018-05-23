---
id: file-canner-resolver-js
title: canner.resolver.js
sidebar_label: canner.resolver.js
---

[Learn more](http://framework.canner.io/docs/guides-resolver.html)

`canner.resolver.js` should export a resolver map.

**canner.resolver.js**

```js
// ...
module.exports = {
  posts: postsResolver,
  info: infoResolver
}
```