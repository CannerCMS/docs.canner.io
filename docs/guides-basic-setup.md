---
id: guides-basic-setup
title: Basic setups
sidebar_label: Basic setups
---

## Installation

First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

Then, you have to install required packages of canner to have a CMS.

### npm

```sh
$ npm install --save canner canner-script @canner/container @canner/router
$ npm install --save-dev canner-schema-loader
```

### yarn

```sh
$ yarn add canner canner-script @canner/container @canner/router
$ yarn add -D canner-schema-loader
```


## Add `canner-schema-loader` in webpack configuation

`canner-schema-loader` is used to transform your CMS schema in `canner.schema.js` into configurations that Canner CMS needs. [TODO: learn more what things generate from loader]

```js
// ...
rules: [{
  test: /(\.schema\.js|canner\.def\.js)$/,
  use: [
    {
      loader: 'canner-schema-loader'
    }, {
      loader: 'babel-loader',
    }]
  ],
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

## Create your CMS

Pass your `canner.schema.js` into `canner`, this will generate all the CMS for you!

> `React` version must be >= 16.x version

```js
import React from 'react';
import ReactDOM from 'react-dom';

// canner packages
import Canner from 'canner';
import Container from '@canner/container';
import Router from '@canner/router';

// your schema
import schema from 'path/to/canner.schema.js';


class CMSExample extends React.Component {
  router = new Router({
    baseUrl: "/"
  });

  componentDidMount() {
    // Trigger the Canner to update the UI with the corresponding part of your CMS.
    this.unlisten = this.router.history.listen(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    <Container
      schema={schema}
      router={this.router}
      navbarConfig={
        showSaveButton: true
      }
      sidebarConfig={
        menuConfig: true
      }
    >
      <Canner />
    </Container>
  }
}

//render it
ReactDOM.render(<CMSExample>, document.getElementById("root"));
```
