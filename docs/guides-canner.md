---
id: guides-canner
title: Canner
sidebar_label: Canner
---

> `React` version must be >= 16.x version

Canner is a react component that helps you to build the whole CMS including the view and the data flow, so you don't have to concern how to connect the APIs. If you want to render the whole page including the sidebar and navbar, please check out [Canner Container](guides-canner-container).

![render CMS without container](/docs/assets/advance-canner-container/without-container.png)


## Installation

First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

Then, you have to install required packages of canner to have a CMS.

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

- `canner-schema-loader` is used to transform your CMS schema in `canner.schema.js` into configurations that Canner CMS needs.
- `less-loader` is required because the [antd](https://ant.design) components of canner were transpiled with [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to archive [customizing theme](https://ant.design/docs/react/customize-theme)

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
/** @jsx builder */

import builder from 'canner-script';

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

## Usage

Give it a schema and specify the routes, Canner will render the form.

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Canner from 'canner';

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