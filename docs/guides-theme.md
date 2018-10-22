---
id: guides-theme
title: Theme
sidebar_label: Theme
---

Currently our CMS components are based on an awesome React UI library called [Antd](https://ant.design/). Customizing UI themes are a frequent request at Canner, by passing theme settings in [canner.cloud.js](cli-cloud-js).

- [Antd variable list](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

For example, if you want to replace `primary-color` with `#07a4b8`

**canner.cloud.js**
```json
module.exports = {
  "theme": {
    "primary-color": "#07a4b8"
  }
}
```
