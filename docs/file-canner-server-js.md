---
id: file-canner-server-js
title: canner.server.js
sidebar_label: canner.server.js
---

In OSS version(self-hosting), Canner CLI builds the static files of the CMS and run the Server to host the CMS, and also supports the GraphQL and Authentication APIs. `canner.server.js` is the configuration of it, you can change the data sources, the UIs, also the authentication config.

`canner.server.js` exports the four item below.

- [`common`](#common)
- [`cms`](#cms)
- [`graphql`](#sidebar-menu-sidebarmenu)
- [`auth`](#sidebar-menu-sidebarmenu)

## examples
The basic example of `canner.server.js`, every item can only be an empty object.

**canner.server.js**
```js
exports.common = {}
exports.cms = {}
exports.graphql = {}
exports.auth = {}
```

## common
## cms
### cms.style.theme `Object`

Currently our CMS components are based on an awesome React UI library called [Antd](https://ant.design/). It supports you change the theme by edit the less variables, and we also implement it in our configuration, by adding the variables in `cms.style.theme`.

- [Antd variable list](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

To set the primary-color `"#07a4b8"`:

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

### cms.style.sidebarTheme `string`

It can be `'light'` or `'dark'`. The color theme of the sidebar, change this will also change the sidebar menu theme. So you may need to change the [theme variables](https://ant.design/components/layout/#Layout.Sider) of [menu](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less#L346-L362).

### cms.style.sidebarStyle `Object`

The style of sidebar.

### cms.style.sidebarMenuStyle `Object`

The style of sidebar menu.

### cms.style.navbarTheme `string`

It can be `'light'` or `'dark'`. The color theme of the navbar, change this will also change the navbar menu theme. So you may need to change the [theme variables](https://ant.design/components/layout/#Layout.Sider) of [menu](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less#L346-L362).

### cms.style.navbarStyle `Object`

The style of navbar.

### cms.style.navbarMenuStyle `Object`

The style of navbar menu.

### cms.sidebarMenu `Array`

To [customize the content of the sidebar](guides-sidebar) of your CMS.

**sidebarMenu interface**

```js
type menuItem = {
  title?: string,
  pathname?: string,
  href?: string,
  icon?: string
}

type subMenuItem = menuItem & {
  items: Array<menuItem>
}

exports.cms = {
  sidebarMenu: Array<menuItem | subMenuItem>
}
```

### cms.showSaveButton `boolean`

Show the save button at top-right corner or not, default vaue is `true`

### cms.logo `string`

The url of logo at top-left corner.

### cms.i18nMessages `Object`

The messages of [react-intl](https://github.com/yahoo/react-intl/wiki/Components#intl-provider-component). It's an object records the texts in different locales. To make i18n works, you have to edit your schema, see [i18n guide](guides-internationalization).

**examples**
```js
// canner.server.js
exports.cms.i18nMessages = {
  en: {
    'name.title': 'Name',
    'name.description': 'Enter your name'
  },
  zh: {
    'name.title': '名稱',
    'name.description': '請輸入名稱'
  }
}

// any.schema.js
<string
  keyName="name"
  title="${name.title}"
  description="${name.description}"
/>

```

## graphql
## auth