---
id: guides-customized-layout
title: Customized Layout
sidebar_label: Layout
---

> `React` version must be >= 16.3 version

If you don't know **Layout**, please read [Layout](schema-layout-tags.md) first.

## Introduction

You can simply customize your layout tag by giving the component in `<Layout />` which exported from `canner-script`.

```js
/** @jsx builder */
import builder, {Layout} from 'canner-script';
import CustomizeLayoutComponent from 'path/to/component';

const CustomizeLayout = props => <Layout component={CustomizeLayoutComponent} {...props} />;

export default (
  <root>
    <object keyName="info">
      <CustomizeLayout>
        <string keyName="name" />
      </CustomizeLayout>
    </object>
  </root>
)
```

## Example

### Tabs layout
**customize tabs layout**
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

> See full list of [API of layouts](api-layout-components.md)

## Add Customized Layout Tag

Using your customized layout is as easy as defining it in the `name` prop in `<Layout/>`.

**canner.schema.js**
```jsx
/** @jsx builder */

import builder, {Layout} from '@canenr/canner-script';

import CustomizeTabsLayout from 'path/to/tabs';

// customize layout 
const Tabs = props => <Layout component={CustomizeTabsLayout} {...props} />;


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

> Further information, see [layout api](api-layouts.md)