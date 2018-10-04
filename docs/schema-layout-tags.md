---
id: schema-layout-tags
title: Layout Tags
sidebar_label: Layout Tags
---

## Introduction

Layout tags are used to create grids, containers, and blocks in CMS. This lets you create customized design layouts and visual design for your CMS.

> Biggest difference between `Layout` and `type` components is that **Layout defines how CMS type components are arranged in your CMS**.

## Basic Layout

Canner supports several basic layouts. Remember to import them before using them.

```jsx
/** @jsx c */
import c, {Default, Block, Tabs} from 'canner-script';
```

***Usage***
```xml
<root>
  <object name="info">
    <Tabs>
      <Default keyName="tab1" title="tab1">
        <string name="name" />
        <string name="nickname" />
      </Default>
      <Default keyName="tab2" title="tab2">
        <Block>
          <object name="phones">
            <string name="phone1" />
            <string name="phone2" />
          </object>
          <object name="address">
            <string name="address1" />
            <string name="address2" />
          </object>
        </Block>
        <Block>
          <object name="emails">
            <string name="email1" />
            <string name="email2" />
          </object>
        </Block>
      </Default>
    </Tabs>
  </object>
</root>
```

### &lt;Default/&gt;

All children will be rendered as normal, this layout is useful when you want to group some fields on ui without changing the data structure.

Such as when you are using tab, the example below will become four tabs.

```js
  <Tabs>
    <string {...}> // -----> tab 1
    <string {...}> // -----> tab 2
    <string {...}> // -----> tab 3
    <string {...}> // -----> tab 4
  </Tabs>
```

you can use `<Default/>` to group fields, it will become only two tabs.

```jsx
<Tabs>
  <Default keyName="section1"> // -----> tab 1
    <string {...}>
    <string {...}>
  </default>
  <Default keyName="section2"> // -----> tab 2
    <string {...}>
    <string {...}>
  </default>
<Tabs>
```

### &lt;Block/&gt;

The children in `Block` will be put into a Card component.

### &lt;Tabs/&gt;

Each child in `Tabs` will be put into a `TabPane`. Usually used with `<Default />` because it can group fields without adding other styles. 

> Notice that each child in Tabs should have keyName to let it works because `<Tabs />` will use the keyName to tell canner to render which child.

```js
<Tabs>
  <Default keyName="section1"> // -----> tab 1
    <string {...}>
    <string {...}>
  </default>
  <Default keyName="section2"> // -----> tab 2
    <string {...}>
    <string {...}>
  </default>
<Tabs>
```

### &lt;Row /&gt; and &lt;Col /&gt;

The grid system same as [antd grid](https://ant.design/components/grid/).

### &lt;Condition /&gt;

Control the children field is hidden or disabled. It has two properties `match` and `defaultMode`, the former is a function with two arguments `value` and `operator`. If the `match` function returns true, the children field will show as normal, or it will behave as the specific defaultMode, such as `hidden` or `disabled`.

For examples, if you want to show the field `address` only when users choose the delivery service, you can use `<Condition />` like below:

```js
<object keyName="shipment">
  <string
    keyName="type"
    ui="select"
    uiParams={{
      options: [{

      }]
    }}
  />
  <Condition match={(value, operator) => {
    return value.type === 'DELIVERY';
  }}>
    <string keyName="address" />
  <Condition />
</object>
```

If you prefer to disable it instead of hiding, add `defaultMode` property in `<Condition />`.

```js
// ...
  <Condition
    match={(value, operator) => {
      return value.type === 'DELIVERY';
    }}
    defaultMode="disabled"
  >
// ...
```


> Further information, see [condition fields](guides-condition-fields.md)

## Customized Layout

You can add customized layout components through the `component` property in `<Layout/>`

```jsx

import CustomizeCardLayout from 'path/to/card';
// canner.schema.js
// customize layout 
const Card = props => <Layout component={CustomizeCardLayout} {...props} />;

module.exports = <root>
  <object>
    <Card>
      <string name="name" />
      <srting name="nickname" />
    </Card>
    <Card>
      <string name="note" />
    </Card>
  </object>
</root>
```

> More customize layout techniques, see [customized layout](guides-customized-layout.md)
 