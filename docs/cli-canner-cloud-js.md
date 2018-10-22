---
id: cli-canner-cloud-js
title: canner.cloud.js
sidebar_label: canner.cloud.js
---

`canner.cloud.js` is the configuation file to set the appearance, data resources, environment, menu sidebar, etc... in your Canner platform's CMS.

Canner now supporting three `canner.cloud.js` settings

- [`env`](#environment-env)
- [`theme`](#theme)
- [`sidebarMenu`](#sidebar-menu-sidebarmenu)

## Environment (env)

`env` key allows you to set different environments with different resources. It can only set with an object, different keys represent different environments, each setting's value **must be an array**, for example:

```js
const {FirebaseCredential} = require("canner-credential");

module.exports = {
  "env": {
    // production firebase setting
    "default": [new FirebaseCredential(require("path to firebase credential"))],
    // test1 firebase settings
    "test1": [new FirebaseCredential(require("path to firebase credential"))]
  }
}
```

> Learn more about [credentials](credential-intro)

### Production

For production, which is the default environment in your Canner platform. Set with `default` key in `env` setting. Serving with production environment, learn more [here](cli-production.md#serving-production-environment).

### Other environments

You could easily serve other environments via Canner CLI, learn more [here](cli-development.md#serving-with-environments).

## Theme

Currently our CMS components are based on an awesome React UI library called [Antd](https://ant.design/). Customizing UI themes are a frequent request at Canner, by passing theme settings in `canner.cloud.js`.

- [Antd variable list](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

For example, if you want to replace `primary-color` with `#07a4b8`

```json
{
  "theme": {
    "primary-color": "#07a4b8"
  }
}
```

> See [theme guide](guides-theme) to know more usage.

## Sidebar Menu (sidebarMenu)

`sidebarMenu` is how you want to render your sidebar in your CMS.

Each menu should contains two properties `title` and `pathname`. `pathname` must be the same as the `keyName` of your first level's tagName.

```json
{
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

> See [sidebar guide](guides-sidebar) to know more usage.
