---
id: version-3.0.0-guides-sidebar
title: Sidebar
sidebar_label: Sidebar
original_id: guides-sidebar
---

To change the sidebar of your CMS, you can set the `sidebarMenu` in [canner.server.js](cli-canner-server-js).

## Basic Menu

Each item in `sidebarMenu` is an object which contains `title` and `pathname`. `title` is the text will show on the sidebar, and `pathname` is corresponding the `keyName` of [first level tags](schema-overview#first-level-tags).

**canner.server.js**
```js
exports.cms = {
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

**canner.server.js**
```js
exports.cms = {
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


## External Link

Use `href` to generate a external link.

**canner.server.js**
```js
exports.cms = {
  "sidebarMenu": [{
    "title": "My Website",
    "href": "https://example.com"
  }, {
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

## Icon

Add `icon` of ant-design in your menuItem.

[Antd icons](https://ant.design/components/icon/)

**canner.server.js**
```js
exports.cms = {
  "sidebarMenu": [{
    "title": 'Home',
    "pathname": '/home',
    "icon": "home"
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

