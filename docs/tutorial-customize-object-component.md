---
id: tutorial-customize-object-component
title: Customize object component
sidebar_label: Customize object component
---

In this tutorial, we are going to build a **component that contains multiple fields internally** that deal with object type data.

Sometimes building CMS components are not as simple as building an input or editor. Somethimes you want to create a component that deal with an entire object. And update data back to CMS, when it's modified.

For example, you are building a variant component for ecommerce website that look like this.

![variant](/docs/assets/tutorial-customize-object/variant.png)

The UI above is hard to construct by components. Instead of building by existing CMS components, you should design a component that renders the whole UI itself.

Now let's get started! You'll learn to build customized fields like this:

![custom fields](/docs/assets/tutorial-customize-object/custom-fields.png)

> `React` version must be >= 16.x version
>
> This demo is [open source on Github](https://github.com/Canner/canner/tree/master/examples/custom-object-fields-pkg)

## 1. Create your component

Create a React component as usual. Here's an example of a map.

```js

import React, { Component } from "react";
import {Map} from 'immutable';

export default class Fields extends Component {

  onChange = (e, type) => {
    const {value } = this.props;
    const newValue = e.target.value;
    console.log(newValue)
  }

  render() {
    const { value } = this.props;
    return (
      <div style={{border: "1px solid #CCC", padding: "20px"}}>
        <h1>Your name</h1>
        <input
          type="text"
          value={value.name}
          onChange={(e) => this.onChange(e, 'name')}
        />
        <h1>Content</h1>
        <textarea
          value={value.content}
          onChange={(e) => this.onChange(e, 'content')}
        />
      </div>
    );
  }
}

```

this component's data is like

```js
{
  name: string,
  content: string
}
```

Here's how an actual data looks like

```js
{
  name: "Howard",
  content: "This is a content area"
}
```

## 2. Transform data to Immutable.js

> IMPORTANT: All internal variables in CMS framework must be [Immutable.js](http://facebook.github.io/immutable-js/), in other words, `value` pass into `onChange` function must be `Immutable.js`.

To update values in Canner called `onChange` function that pass as props, to your CMS component. And you could receive your new value through `value` prop.

```js

import React, { Component } from "react";
import {Map} from 'immutable';

export default class Fields extends Component {
  static defaultProps = {
    value: new Map() // define immutable map
  };

  onChange = (e, type) => {
    const { refId, value } = this.props;
    const newValue = e.target.value;
  }

  render() {
    const { value } = this.props;
    return (
      <div style={{border: "1px solid #CCC", padding: "20px"}}>
        <h1>Your name</h1>
        <input
          type="text"
          value={value.get('name')} // get value from immutable map
          onChange={(e) => this.onChange(e, 'name')}
        />
        <h1>Content</h1>
        <textarea
          value={value.get('content')} // get value from immutable map
          onChange={(e) => this.onChange(e, 'content')}
        />
      </div>
    );
  }
}

```

## 3. Update `value` in CMS

To update values in Canner called `onChange` function that pass as props, to your CMS component. And you could receive your new value through `value` prop.

```js
onChange = (e, type) => {
  const { refId, value } = this.props;
  const newValue = e.target.value;

  // call onChange function from props
  this.props.onChange(refId, "update", value.setIn([type], newValue));
}
```

## 4. Define `canner.def.js`

All `object` and `array` type components must define it's `canner.def.js`. In order to let CMS know what data structure is inside your component.

In this example, add a `canner.def.js` in root.

```js
/** @jsx builder */
import builder from 'canner-script';

module.exports = function({attributes}) {
  return (
    <object {...attributes}>
      <string keyName="name" />
      <string keyName="content" />
    </object>
  );
}
```

> Learn more about [`canner.def.js`](advance-customized-component.md#canner.def.js)

## 5. Publish

Now your customized component is done, is time to puslish as a npm package.

Your `name` in `package.json` **must** be format like

`${prefix}-${type}-${name}` or `@${scope}/${prefix}-${type}-${name}`

1. `prefix`: prefix namespace of your package
2. `type`: **must** be one of [component types](advance-component-types.md).
3. `name`: name of package.

> Learn more at [customized component - Naming](advance-customized-component.md#naming)

Here's your `package.json` might look like.

```js
{
  "name": "@canner/customize-object-field",
  "version": "0.1.4",
  "description": "object field",
  "main": "lib/index.js",
  "keywords": [
    "cms",
    "input",
    "canner"
  ],
  "author": "canner",
  "license": "ISC",
  "peerDependencies": {
    "react": "^0.14.0 || ^15.0.0 || ^16.0.0"
  },
  "canner": {
    "cannerDataType": "object"
  }
}
```

And remember to add a new key called `canner` in `package.json`, in here add

```js
{
  ...
  "canner": {
    "cannerDataType": "object"
  }
}
```

> Learn more how to setup [Canner configuration](advance-customized-component.md#canner-configuration)


## 6. Install in CMS

Install package in your CMS, and import your package in your `canner.schema.js` add `packageName` attribute in your object tag. So here we'll set `packageName` as `@canner/customize-object-fields`.

```xml
<object keyName="demoFields" title="Demo" packageName="@canner/customize-object-fields"/>
```

## 7. You're done

Now you can see your customized component in your CMS.

![customize fields](/docs/assets/tutorial-customize-object/custom-fields.png)

> This demo is [open source on Github](https://github.com/Canner/canner/tree/master/examples/custom-object-fields-pkg)