---
id: schema-layout-tags
title: Layout Tags
sidebar_label: Layout Tags
---

## Introduction

Layout tags are used to create grids, containers, and blocks in CMS. It allows you create customized design layouts and visual design for your CMS.

> Biggest difference between `layout` and `type` components is that **Layout defines how CMS type components are arranged (Grids, tabs, etc..) in your CMS**.

## Basic Layout

Canner supports several basic layouts. Remember to import them before using it.

```jsx
/** @jsx c */
import c, {Default, Block, Tabs, Row, Col, Condition} from 'canner-script';
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

**Usage**

```js
/** @jsx c */
import c, {Default} from 'canner-script';
```

`<Default/>` is used to group tags. All children will be rendered as normal, this layout is useful when you want to group some fields on UI without changing the data structure.

Such as when you are using tab, example below will become four tabs.

```js
  <Tabs>
    <string {...}> // -----> tab 1
    <string {...}> // -----> tab 2
    <string {...}> // -----> tab 3
    <string {...}> // -----> tab 4
  </Tabs>
```

You can use `<Default/>` to group fields, it will become only two tabs.

```jsx
<Tabs>
  <Default keyName="section1"> // -----> tab 1
    <string {...}>
    <string {...}>
  </Default>
  <Default keyName="section2"> // -----> tab 2
    <string {...}>
    <string {...}>
  </Default>
<Tabs>
```

### &lt;Block/&gt;

**Usage**

```js
/** @jsx c */
import c, {Block} from 'canner-script';
```

The children in `Block` will be insert into a Card component.

**Preview**

```jsx
<Block title="Your Profile">
  <string title="What is your name?" keyName="name"/>
</Block>
```

Will render into

![card](/docs/assets/schema-overview/layout-card.png)

### &lt;Tabs/&gt;

**Usage**

```js
/** @jsx c */
import c, {Tabs} from 'canner-script';
```

Each child in `Tabs` will be put into a `TabPane`. Usually used with `<Default />` because it can group fields without adding other styles. 

```js
<Tabs>
  <Default keyName="section1"> // -----> tab 1
    <string {...}>
    <string {...}>
  </Default>
  <Default keyName="section2"> // -----> tab 2
    <string {...}>
    <string {...}>
  </Default>
<Tabs>
```

**Preview**

> Notice that each child in Tabs must have `keyName`, because `<Tabs />` will use the `keyName` to decide whether the child should be rendered.

```js
<Tabs>
  <string title="Your profile" keyName="name"/>
  <string title="Your resume" keyName="employee"/>
</Tabs>
```

It will render into

![tabs](/docs/assets/schema-overview/layout-tabs.png)

### &lt;Row /&gt; and &lt;Col /&gt;

**Usage**

```js
/** @jsx c */
import c, {Row, Col} from 'canner-script';
```

The grid system is the same as [antd grid](https://ant.design/components/grid/).

**Preview**

```js
<Row>
  <Col span={8}>
    <Block title="Your Profile">
      <string title="What is your name?" keyName="name"/>
    </Block>
  </Col>
  <Col span={15} offset={1}>
    <Block title="Your Resume">
      <string title="Where to you graduate?" keyName="college"/>
    </Block>
  </Col>
</Row>
```

Will render to

![grid](/docs/assets/schema-overview/layout-grid.png)


### &lt;Condition /&gt;

**Usage**

```js
/** @jsx c */
import c, {Condition} from 'canner-script';
```

Control the children field whether it is fulfill a certain condition. It has two properties `match` and `defaultMode`, the former is a function with two arguments `value` and `operator`. If the `match` function returns true, the children field will show as normal, or it will behave as the specific defaultMode, such as `hidden` or `disabled`.

- `value`: You could access all the data in the same block, could use to determine whether it should render or not.
- `operator`: The action of the first level.

For examples, if you want to show the field `address` only when users choose the delivery service, you can use `<Condition />` as below:

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
  </Condition>
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

**Preview**

```js
<object keyName="shipment">
  <string
    keyName="type"
    ui="select"
    uiParams={{
      options: [{
        text: 'FedEx',
        value: "fedex"
      }, {
        text: 'In Person',
        value: "inperson"
      }, {
        text: 'None',
        value: "none"
      }]
    }}
  />
  <Condition match={(value, operator) => {
    return value.type === 'fedex';
  }}>
    <string keyName="address" title="Enter address please?" />
  </Condition>
  <Condition match={(value, operator) => {
    return value.type === 'inperson';
  }}>
    <string keyName="name" title="What is your name?" />
  </Condition>
</object>
```

Will render into

![preview](/docs/assets/schema-overview/layout-condition.gif)


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
      <string name="nickname" />
    </Card>
    <Card>
      <string name="note" />
    </Card>
  </object>
</root>
```

> More customize layout techniques, see [customized layout](guides-customized-layout.md)
 