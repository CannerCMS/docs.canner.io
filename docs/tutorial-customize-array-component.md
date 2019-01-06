---
id: tutorial-customize-array-component
title: Customize array component
sidebar_label: Array component
---

In this tutorial, we are going to demo how you build an array component.  **This example demonstrate a common technique of building a customized component that is able to render customized component's children**.

For example your `array-tab` component syntax could be like

```js
<array keyName="demoArray" packageName="@canner/customize-array-tabs">
  <string keyName="name" title="Name" />
  <string keyName="description" title="Description" />
</array>
```

And you'll get result below. `Name` and `Description` fields will rendered in tabs.

![array-tab](/docs/assets/tutorial-customize-array/array-tab.png)

Let's started!

> `React` version must be >= 16.x version
>
> This demo is [open source on Github](https://github.com/Canner/canner/tree/master/examples/custom-array-tabs-pkg)

## 1. Create your component

Create a React component as usual. Here's an example of a tab porting [`rc-tabs`](https://www.npmjs.com/package/rc-tabs) as a Canner CMS component.

Normally you'll use `rc-tabs` as below:

> This example assume that your `value` prop is an array.

```js
import React, { Component } from "react";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import { Button, Icon, Modal } from "antd";
import 'antd/lib/tabs/style';

const {confirm} = Modal;

export default class TabUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '0',
    };
  }

  static defaultProps = {
    uiParams: {},
    value: []
  };

  handleTabChange = (key) => {
    this.setState({ activeKey: key });
  };

  handleCreate = () => {
    const {
      value,
      onChange,
    } = this.props;
    // create tab

    this.setState({ activeKey: `${value.length}` });
  };

  handleDelete = (index) => {
    const { onChange, value } = this.props;
    const that = this;
    confirm({
      title: "Confirm to delete?",
      onOk() {
        // delete tab
        that.setState({
          activeKey: `${value.length - 2}`
        });
      }
    })
  };

  render() {
    const {
      value,
      uiParams
    } = this.props;
    const { activeKey } = this.state;
    const panelFields = [];

    // set array content
    value.forEach((item, i) => {

      // generate panel title
      let title;
      const defaultTitle = `Item ${i + 1}`;

      if (uiParams.titleKey) {
        title = item.uiParams.titleKey || defaultTitle;
      } else if (uiParams.titlePrefix) {
        title = `${uiParams.titlePrefix}${i + 1}` || defaultTitle;
      } else {
        title = defaultTitle;
      }

      const deleteBtn = (index) => (
        <Icon type="close-circle" onClick={() => this.handleDelete(index)} />
      );

      if (activeKey === `${i}`) {
        title = [deleteBtn(i), ' ', title];
      }

      panelFields.push(
        <TabPane
          tab={title}
          id={i}
          key={`${i}`}
          style={{overflow: 'hidden'}}
        >
          <div>tab content</div>
        </TabPane>
      );
    });
    
    return (
      <div style={{width: '100%'}}>
        <Tabs
          prefixCls='ant-tabs'
          activeKey={`${activeKey}`}
          tabBarPosition={'top'}
          renderTabBar={() => (
            <ScrollableInkTabBar
              extraContent={
                <Button style={{margin: '6px'}} onClick={this.handleCreate}>+ Add</Button>
              }
              />
          )}
          renderTabContent={() => (
            <TabContent tabBarPosition={'top'} animated={false} />
          )}
          onChange={this.handleTabChange}
        >
          {panelFields}
        </Tabs>
      </div>
    );
  }
}
```

## 2. Update `value` in CMS

To update values in Canner called `onChange` function that pass as props, to your CMS component. And you could receive your new value through `value` prop.

In `handleCreate` function:

```js
handleCreate = () => {
  const {
    value,
    refId,
    onChange,
  } = this.props;
  const size = value.size;
  // add onChange function to update value in CMS
  onChange(refId, 'create');
  this.setState({ activeKey: `${size}` });
};
```

In `handleDelete` function:

```js
handleDelete = (index) => {
  const { onChange, value, refId } = this.props;
  const that = this;
  confirm({
    title: "Confirm to delete?",
    onOk() {
      // add onChange function to update value in CMS
      onChange(refId.child(index), "delete")
        .then(() => {
          that.setState({
            activeKey: `${value.size - 2}`
          });
        });
    }
  })
};
```

## 3. Render children in side array

Origial usage you'll render content inside `<TabPane>` like this:

```js
panelFields.push(
  <TabPane
    tab={title}
    id={i}
    key={`${i}`}
    style={{overflow: 'hidden'}}
  >
    <div>tab content</div>
  </TabPane>
);
```

Now we want to render children inside `<TabPane>` so we replace with

```js
// get child's reference by adding `.child(index)`
const thisId = refId.child(i);

panelFields.push(
  <TabPane
    tab={title}
    id={thisId}
    key={`${i}`}
    style={{overflow: 'hidden'}}
  >
    <Item
      refId={thisId}
    />
  </TabPane>
);
```

> Learn more about [`<Item/>`](advance-cms-helpers.md) 

## 4. Define `canner.def.js`

All `object` and `array` type components must define it's `canner.def.js`. In order to let CMS know what data structure is inside your component.

In this example, add a `canner.def.js` in root.

```js
import CannerScript from 'canner-script';

module.exports = function({attributes, children}) {
  return (
    <array {...attributes}>
      {children}
    </array>
  );
}
```

> Notice you have to add `{children}` inside `<array/>` to indicate that inside `array` should render it's children.
> Learn more about [`canner.def.js`](guides-customized-component#cannerdefjs)


## 5. Publish

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
  "name": "@canner/customize-array-tabs",
  "version": "0.1.19",
  "description": "array tabs",
  "main": "lib/index.js",
  "scripts": {},
  "keywords": [
    "cms",
    "tabs",
    "canner"
  ],
  "peerDependencies": {
    "react": "^0.14.0 || ^15.0.0 || ^16.0.0"
  },
  "author": "canner",
  "license": "ISC",
  "dependencies": {
    "antd": "^3.2.0",
    "rc-tabs": "^9.2.5"
  }
}
```

> Learn more how to setup [Canner configuration](guides-customized-component#canner-configuration)


## 6. Install in CMS

Install package in your CMS, and import your package in your `canner.schema.js` add `packageName` attribute in your object tag. So here we'll set `packageName` as `@canner/customize-array-tabs`.

```xml
<array keyName="demoArray" packageName="@canner/customize-array-tabs">
  <string keyName="name" title="Name" />
  <string keyName="description" title="Description" />
</array>
```

## 7. You're done

Now you can see your customized component in your CMS.

![array-tab](/docs/assets/tutorial-customize-array/array-tab.png)

> This demo is [open source on Github](https://github.com/Canner/canner/tree/master/examples/custom-array-tabs-pkg)