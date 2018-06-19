---
id: advance-customized-layout
title: Customized CMS layouts
sidebar_label: Customized CMS layouts
---

> `React` version must be >= 16.x version

If you don't know **Layout**, please read [Advance Layout](advance-layout.md) first.

## Write a Layout (Tab pane)

Below is a customized layout for a tab pane that maps each child to a tab.

```js
import * as React from 'react';
import {Tabs} from 'antd';
import {Item} from 'canner-helpers';
const TabPane = Tabs.TabPane;

export default class Tab extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Tabs>
        {
          // Loop through children and wrap with <TabPane/>
          
          children.map((child, i) => (
            <TabPane key={i} tab={child.title}>
              <Item
                filter={node => node.keyName === child.keyName}
              />
            </TabPane>
          ))
        }
      </Tabs>
    )
  }
}
```

> See full list of [API of layouts](api-layouts.md)

## Add Customized Layout Tag

Using your customized layout is as easy as defining it in the `name` prop in `<Layout/>`.

```jsx
// canner.schema.js
/** @jsx builder */

import builder, {Layout} from '@canenr/canner-script';

const Tabs = props => <Layout name="tabs" {...props} />;

module.exports = (
  <root>
    <Tabs>
      <object keyName="string type" title="String type">
        <string keyName="editor" title="Editor" ui="editor" />
        <string keyName="link" title="Link" ui="link"/>
      </object>
      <object keyName="boolean" title="Boolean Types">
        <boolean keyName="card" ui="card" title="Card" />
        <boolean keyName="switch" ui="switch" title="Switch" />
      </object>
      <object keyName="number" title="Number Types">
        <number keyName="input" title="Title" ui="input" />
        <number keyName="rate" title="Rate" ui="rate" />
        <number keyName="slider" title="Slider" ui="slider" />
      </object>
    </Tabs>
  </root>
);
```
## layout prop in &lt;CMS/&gt;

Declare customized layout namespace by passing key name in the layout prop.

> Notice that the **key** of the layout object should be the same as the `name` as Layout name property you define in the `schema.js`.

```js
// cms.js
import {CMS} from 'canner';
import MyCardLayout from 'path/to/card';

class Example extends React.Component {
  render() {
    return (
      <CMS
        {...otherProps}
        layout={{
          card: MyCardLayout
        }}
      />
    )
  }
}