---
id: version-2.8.3-guides-theme
title: Theme
sidebar_label: Theme
original_id: guides-theme
---

## Introduction

Currently our CMS components are based on an awesome React UI library called [Antd](https://ant.design/). Customizing UI themes are a frequent request at Canner, by passing theme settings in [canner.cloud.js](cli-cloud-js).

- [Antd variable list](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

For example, if you want to replace `primary-color` with `#07a4b8`, you can add the `cloud.config.js` below in your working directory.

**canner.cloud.js**
```json
module.exports = {
  "theme": {
    "primary-color": "#07a4b8"
  }
}
```

## Canner Theme

The below object is the default theme of Canner, they are also the commonly variables that you may want to change. 

```json
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
```
