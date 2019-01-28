---
id: version-2.8.3-guides-canner
title: Canner Component
sidebar_label: Canner Component
original_id: guides-canner
---

> `React` version must be >= 16.x version

Canner component is a React component that helps you to build the whole CMS including the view and the data flow, so you don't have to concern how to connect the APIs. **If you want to render the whole page including the sidebar and navbar, please check out [Canner Container](guides-canner-container)**.


Below is a preview of Canner component without [Canner Container](guides-canner-container).

![render CMS without container](/docs/assets/advance-canner-container/without-container.png)


## Installation

First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

Then, you have to install packages which Canner requires to have a CMS.

### npm

```sh
$ npm install --save canner antd firebase
$ npm install --save-dev canner-schema-loader canner-script less less-loader css-loader style-loader
```

### yarn

```sh
$ yarn add canner antd firebase
$ yarn add -D canner-schema-loader canner-script less less-loader css-loader style-loader
```


## Add `canner-schema-loader` and `less-loader` in webpack configuation

- `canner-schema-loader` is used to transform your CMS schema in `canner.schema.js` into configurations that Canner needs.
- `less-loader` is required because the [antd](https://ant.design) components used in Canner need to transpile through [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to archive [customizing theme feature](https://ant.design/docs/react/customize-theme).

```js
// ...
rules: [{
  test: /(\.schema\.js|canner\.def\.js)$/,
  use: [
    {
      loader: 'canner-schema-loader'
    }, {
      loader: 'babel-loader',
    }
  ],
}, {
  test: /\.less$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'less-loader'
  }]
}]
// ...
```

## Create `canner.schema.js`

> Furthur Information
> - [Schema Overview](schema-overview.md)

***canner.schema.js***

```jsx
import CannerScript from 'canner-script';

module.exports = (
  <root>
    <object keyName="info" title="My Info">
      <string keyName="name" title="Name"/>
      <string keyName="nickname" title="Nickname" />
      <string keyName="intro" ui="editor"/>
      <dateTime keyName="updateAt"/>
    </object>
  </root>
);
```

## Canner component usage

Pass a schema and assign the routes, Canner will render the form.

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Canner from 'canner';  // <----- use canner component

// your schema
import schema from './canner.schema.js';


class CMSExample extends React.Component {
  render() {
    const routes = location.pathname.split('/').slice(1);
    // routes: ['info']
    return (
      <Canner
        schema={schema}
        routes={routes}
        goTo={({ pathname }) => { location.href = pathname; }}
        baseUrl="/"
      />
    );
  }
}

//render it
ReactDOM.render(<CMSExample />, document.getElementById("root");

```