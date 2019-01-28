---
id: version-2.8.3-start-quick-build-the-cms
title: Build your first CMS
sidebar_label: Build your first CMS
original_id: start-quick-build-the-cms
---

> You can find the example repository [here](https://github.com/Canner/canner-quick-start).

## Installation

First of all, you have to install at least [Node](https://nodejs.org/en/download/) and [npm](http://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) on your computer, and intitalize a React project. 

> While we recommend Node 8.x or greater, your Node version must at least >= 6.10.

Then, you have to install required packages of canner to have a CMS.

### npm

```sh
$ npm install --save canner antd firebase @canner/antd-components @canner/router @canner/container
$ npm install --save-dev canner-schema-loader canner-script less less-loader css-loader style-loader babel-plugin-import
```

### yarn

```sh
$ yarn add canner antd firebase @canner/antd-components @canner/router @canner/container
$ yarn add -D canner-schema-loader canner-script less less-loader css-loader style-loader babel-plugin-import
```

## Add `babel-plugin-import` in your babel plugins

**babel.config.js**
```js
module.exports = {
  //...
  plugins: [
    [
      "import": {
        "libraryName": "antd",
        "style": true,
      }
    ]
  ]
  //...
}
```

## Add `canner-schema-loader` and `less-loader` in webpack configuation

- `canner-schema-loader` is used to transform your CMS schema in `canner.schema.js` into configurations that Canner CMS needs.
- `less-loader` is required because the [antd](https://ant.design) components of canner were transpiled with [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to archive [customizing theme](https://ant.design/docs/react/customize-theme)

```js
// ...
module: {
  rules: [{
    oneOf: [
      {
        test: /(\.schema\.js|canner\.def\.js)$/,
        use: [{
          loader: "canner-schema-loader"
        }, {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-react", 
                {
                  "pragma": "CannerScript", // default pragma is React.createElement
                  "pragmaFrag": "CannerScript.Default", // default is React.Fragment
                  "throwIfNamespace": false // defaults to true
                }
              ]
            ]
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
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
}
// ...
```

## Create `canner.schema.js`

> Furthur Information
> - [Schema Overview](schema-overview.md)

***schema/canner.schema.js***

```jsx
import CannerScript from 'canner-script';

module.exports = (
  <root>
    <object keyName="info" title="My Info">
      <string keyName="name" title="Name"/>
      <object keyName="intro" title="Intro" ui="editor"/>
      <dateTime keyName="updateAt" title="Update at"/>
    </object>
  </root>
);
```

## Create your CMS

Pass your `canner.schema.js` into `canner`, this will generate all the CMS for you!

> `React` version must be >= 16.x version

***src/index.js***
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// canner packages
import Canner from 'canner';
import Container from '@canner/container';
import Router from '@canner/router';

// your schema
import schema from '../schema/canner.schema.js';


class CMSExample extends React.Component {
  router = new Router({
    baseUrl: "/canner-quick-start"
  });

  componentDidMount() {
    // Trigger the Canner to update the UI with the corresponding part of your CMS.
    this.unlisten = this.router.history.listen(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <Container
        schema={schema}
        router={this.router}
        navbarConfig={{
          showSaveButton: true
        }}
        sidebarConfig={{
          menuConfig: true
        }}
      >
        <Canner />
      </Container>
    );
  }
}

//render it
ReactDOM.render(<CMSExample />, document.getElementById("root"));
```
