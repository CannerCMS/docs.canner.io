---
id: tutorial-customize-string-component
title: Customize string component
sidebar_label: String component
---

In this tutorial, we are going to build a **string component** that deal with object type data.

> `React` version must be >= 16.x version
>
> This demo is [open source on Github](https://github.com/Canner/canner/tree/master/examples/custom-string-input-pkg)

## 1. Create your component

Create your React component as usual, in this tutorial we will port example below as a Canner **CMS component**.

```js
import React, { PureComponent } from "react";

export default class StringInput extends PureComponent {

  render() {
    const { disabled, value } = this.props;
    return (
      <input
        disabled={disabled}
        type="text"
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
```

## 2. Received and update `value` in CMS

To update values in Canner called `onChange` function that pass as props, to your CMS component. And you could receive your new value through `value` prop.

```js
import React, { PureComponent } from "react";

export default class StringInput extends PureComponent {

  onChange = (e) => {
    // onChange function is used to update your value in CMS data
    this.props.onChange(this.props.refId, "update", e.target.value);
  };

  render() {
    // get your updated value from this.props.value
    const { disabled, value } = this.props;
    return (
      <input
        disabled={disabled}
        type="text"
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
```

## 3. Publish

Now your customized component is done, is time to puslish as a npm package.

Your `name` in `package.json` **must** be format like

`${prefix}-${type}-${name}` or `@${scope}/${prefix}-${type}-${name}`

1. `prefix`: prefix namespace of your package
2. `type`: **must** be one of [component types](schema-data-type-tags).
3. `name`: name of package.

> Learn more at [customized component - Naming](guides-customized-component#naming)

Here's your `package.json` might look like.

```js
{
  "name": "@canner/customize-string-input",
  "version": "0.1.4",
  "description": "string input",
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
    "cannerDataType": "string"
  }
}
```

And remember to add a new key called `canner` in `package.json`, in here add

```js
{
  ...
  "canner": {
    "cannerDataType": "string"
  }
}
```

> Learn more how to setup [Canner configuration](guides-customized-component#canner-configuration)

## 4. Install in CMS

Install package in your CMS, and import your package in your `canner.schema.js` add `packageName` attribute in your string. So here we'll set `packageName` as `@canner/customize-string-input`.

```xml
<string keyName="demoInput" title="Demo" packageName="@canner/customize-string-input"/>
```

## 5. You're done

Now you can see your customized component in your CMS.

![customize string](/docs/assets/tutorial-customize-string/input.png)

> This demo is [open source on Github](https://github.com/Canner/canner/tree/master/examples/custom-string-input-pkg)