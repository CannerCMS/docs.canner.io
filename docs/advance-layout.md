---
id: advance-layout
title: Layout
sidebar_label: Layout
---

Layout tags are used to create grids, containers, and blocks in CMS. This lets you create customized design layouts and visual design for your CMS.

> Biggest difference between `Layout` and `type` components is that **Layout defines how CMS type components are arranged in your CMS**.

## Basic Layout

Canner supports serveral basic layouts. Remember to import them before using them.

```jsx
/** @jsx c */
import c, {Default, Block, Tabs} from 'canner-script';
```

***Usage***
```xml
<root>
  <Body>
    <object name="info">
      <Tabs>
        <Default>
          <string name="name" />
          <string name="nickname" />
        </Default>
        <Default>
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
  </Body>
</root>
```

### &lt;Default/&gt;

All children will be rendered as normal, this layout is useful when you want to group some fields on ui without changing the data structure.

### &lt;Block/&gt;

The children in `Block` will be put into a Card component.

### &lt;Tabs/&gt;

Each child in `Tabs` will be put into a `TabPane`.


## Default Layout

Canner CMS will add default layouts for your CMS. 

### First level in &lt;root/&gt;

Canner will wrap first level component into `Body` layout. 

### Second level in &lt;root/&gt;

Components will be categorized by their types, see [detail rules](https://github.com/Canner/canner-script/blob/master/src/visitors/layer1-2Fieldset.js).


## Customized Layout

You can add customized layout components through the `component` props in `<Layout/>`

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

> More customize layout techniques, see [Advance customized layout](advance-customized-layout.md)
 
## Visitors

Layout tags will create visitors, and exported to `canner-schema-loader` to transform the component tree.
