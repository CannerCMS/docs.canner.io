---
id: guides-writing-schema
title: Writing CMS schema
sidebar_label: Writing CMS schema
---

## Introduction

Unlike other CMS solutions, Canner CMS provides components for developers to pick and assemble components that fit their needs.

A ***CMS schema*** is constructed with the `jsx` syntax, describing the structure of the source data, and what the CMS UI should expect in certain fields.

> Normally, CMS schema is stored in `canner.schema.js` file.

## The root

All schema's root should wrapped by `<root/>` component

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    // {... your schema}
  </root>
)
```

## Define CMS UI

CMS UI components are categorized into `Array`, `Boolean`, `Number`, `Object`, `String`. For more specialized uses, there are some speical types such as `Date`, `File`, `GeoPoint`, etc....

> See the supported list here: [Canner CMS component](https://canner.github.io/antd-cms-component-docs/?selectedKind=Array&selectedStory=Gallery&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

Each type has a default UI, for `string` it's default UI is an `input`. For `array`, is a `tab`.

> Every CMS UI tags **must have** props `keyName`, which indicate the data to UI. And **must be in camel case**, because Canner underlying technology to data sources is GraphQL, it doesn't allow dash. [Reference to GraphQL Names](http://facebook.github.io/graphql/October2016/#sec-Names)

```jsx
<string keyName="name" />
// same as 
<string keyName="name" ui="input"/>
```

Simply change the ui property to change the CMS UI. Below is an example, to change UI to editor. 

```jsx
<string keyName="content" ui="editor"/>
```

In some UIs, it provides `uiParams` for more detailed settings.

```js
const size = [{
  text: 'Large',
  value: 'large'
}, {
  text: 'Small',
  value: 'small'
}];

<string
  keyName="size"
  ui="select"
  uiParams={{options: size}} />
```

> Note that, all key names should fit your data's key from source.


## From data source to CMS schema

One of the biggest advantages of using Canner CMS is that Canner CMS adapts to your data source's API.

Assuming you have a data as below.

```js
{
  info: {
    firstname: 'BBB',
    lastname: 'AAA',
  }
}
```

You could design a CMS that fit's this data, as below.

```xml
<object keyName="info">
  <string keyName="firstname" />
  <string keyName="lastname" />
</object>
```

> All schema have to be wrapped in `<root/>`

Here's the final result:

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    <object keyName="info">
      <string keyName="firstname" />
      <string keyName="lastname" />
    </object>
  </root>
);
```


## Layouts

Layout tags are used to create grids, containers, and blocks in CMS. This lets you create customized design layouts and visual design for your CMS. Moreover, you could design your customized layouts

> Learn more about [customized layout](advance-customized-layout.md)

```jsx
/** @jsx builder */
import builder, {Block} from 'canner-script';

export default (
  <root>
    <object keyName="info">
      <Block>
        <string keyName="firstname" />
      </Block>
      <Block>
        <string keyName="lastname" />
      </Block>
    </object>
  </root>
);
```

## Reference
- [All CMS component tags](api-canner-script.md)