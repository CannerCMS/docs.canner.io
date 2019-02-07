---
id: guides-style
title: Style
sidebar_label: Style
---

Customizing UI are a frequent request at Canner, by passing `cms.style` settings in [canner.server.js](cli-server-js).

**style config**
```
exports.cms = {
  style: {
    theme: AntdThemeVariables,
    sidebarTheme: 'dark' | 'light',
    sidebarStyle: {},
    sidebarMenuStyle: {},
    navbarTheme: 'dark' | 'light',
    navbarStyle: {},
    navbarMenuStyle: {},
  }
}
```


## Antd Theme Varables

Currently our CMS components are based on an awesome React UI library called [Antd](https://ant.design/). It supports you change the theme by edit the less variables, and we also implement it in our configuration, by adding the variables in `cms.style.theme`.

- [Antd variable list](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

For example, if you want to replace `primary-color` with `#07a4b8`, you can add the `canner.server.js` below in your working directory.

**canner.server.js**
```json
exports.cms = {
  "style": {
    "theme": {
      "primary-color": "#07a4b8"
    }
  }
}
```

The below object is the default theme of Canner, they are also the common variables that you may want to change. 

```json
exports.cms = {
  "style": {
    "theme": {
      {
        "menu-dark-bg": "#373d62",
        "layout-sider-background": "#373d62",
        "layout-header-background": "#373d62",
        "layout-trigger-background": "#373d62",
        "primary-color": "#f2b173",
        "btn-primary-bg": "#6bbcbc",
        "progress-default-color": "#6bbcbc",
        "menu-dark-item-selected-bg": "#283050",
        "menu-dark-item-active-bg": "#283050",
        "item-active-bg": "rgba(242, 177, 115, 0.1)",
        "item-hover-bg": "rgba(242, 177, 115, 0.3)",
        "font-size-base": "14px"
      }
    }
  }
}
```
