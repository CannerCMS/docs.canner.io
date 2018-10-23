---
id: guides-sidebar
title: Sidebar
sidebar_label: Sidebar
---

To change the sidebar of your CMS, you can set the `sidebarMenu` in [canner.cloud.js](cli-cloud-config-js).


## Basic Menu

Each item in `sidebarMenu` is an object which contains `title` and `pathname`. `title` is the text will show on the sidebar, and `pathname` is corresponding the `keyName` of [first level tags](schema-overview#first-level-tags).

**cloud.config.js**
```js
module.exports = {
  "sidebarMenu": [{
    "title": 'Home',
    "pathname": '/home'
  }, {
    "title": 'courses',
    "pathname": '/courses'
  }, {
    "title": 'Author List',
    "pathname": '/authors'
  }, {
    "title": 'post',
    "pathname": '/post'
  }]
}
```
## Submenu

You can add `items` property to create a submenu in your sidebar.

**cloud.config.js**
```js
module.exports = {
  "sidebarMenu": [{
    "title": 'Home',
    "pathname": '/home'
  }, {
    "title": 'courses',
    "pathname": '/courses'
  }, {
    "title": 'Authors',
    "items": [{
      "title": 'Author List',
      "pathname": '/authors'
    }, {
      "title": 'post',
      "pathname": '/post'
    }]
  }]
}
```

This will generate sidebar menu as below

![result](/docs/assets/cli/canner-config-sidebar.png)


