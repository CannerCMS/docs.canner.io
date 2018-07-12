---
id: guides-basic-setup
title: Basic setups
sidebar_label: Basic setups
---

## Installation

First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer.

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

### npm

```sh
$ npm install --save canner canner-layouts canner-helpers canner-script
$ npm install --save-dev canner-schema-loader
```

### yarn

```sh
$ yarn add canner canner-layouts canner-helpers canner-script
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
> - [Writing a Schema](guides-writing-schema.md)

***canner.schema.js***

```jsx
/** @jsx builder */

var builder = require('canner-script');

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

> `canner` relies on `react-router` to achieve routing in CMS, so you have to pass `history` prop into `<CMS/>`

> `React` version must be >= 16.x version

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {CMS} from 'canner';

// your schema
import schema from 'path/to/canner.schema.js';

//render it 
ReactDOM.render(
  <Router>
    <Route path="/" render={({history}) => (
      <CMS
        history={history}
        schema={schema}
      />
    )} />
  </Router>
, document.getElementById("root"));
```
