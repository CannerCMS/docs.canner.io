---
id: guides-writing-schema
title: CMS Schema
sidebar_label: CMS Schema
---

## Introduction

Unlike other CMS solutions, Canner CMS provides components for developers to pick and assemble components that fit their needs.

A ***CMS schema*** is constructed with the `jsx` syntax, describing the structure of the source data, how to connect to your service, and what the CMS UI should expect in certain fields.

> Normally, CMS schema is stored in `canner.schema.js` file.

## The root

All schema's root should wrapped by `<root/>` component, you have to also setup [connector](guides-connector.md) to define how CMS connect to your source.

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root connector={connector}>
    // {... your schema}
  </root>
)
```

### First level tags

The first level tags of `<root/>` must be eithor `<object/>` or `<array/>`, first level tags will eventually become CMS's tabs.  If you want to setup different connector in different tab you could set connectors individually. Moreover, you could to customize how CMS resolve your data pass [resolver](guides-resolver.md) prop into your tabs.

```jsx
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    <object
      keyName="overview"
      title="Overview Tab"
      connector={connector}
      resolver={resolver}>
      <string title="Your name" keyName="name"/>
    </object>
    <array
      keyName="list"
      title="Products"
      connector={connector2}
      resolver={resolver}>
      <string title="Product name" keyName="name"/>
    </array>
  </root>
)
```

> Learn more about [connector](guides-connector.md) and [resolver](guides-resolver.md)

## Define CMS UI

CMS UI components are categorized into `Array`, `Boolean`, `Number`, `Object`, `String`. For more specialized uses, there are some speical types such as `Date`, `File`, `GeoPoint`, etc....

> See the supported list here: [Canner CMS component](/component/?selectedKind=Array&selectedStory=Gallery&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

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

## Validation

Canner relies on [ajv](https://github.com/epoberezkin/ajv#validation-keywords) for the validation.

You can add a `validation` prop to the data type tags such as `<string/>`, `<object />`, etc. Then it will be validated when deployed.

**examples**

```js
export default (
  <root>
    <array keyName="users">
      <string title="User Name" keyName="name" validation={{pattern: '^[a-zA-Z0-9]{4,10}$'}} />
    </array>
  </root>
)
```

![validation with pattern](/docs/assets/guides-writing-schema/pattern.png)

### Required Field

In addition to the [required](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#required) keyword in `ajv`, we also provide the individual `required` prop to confirm the value is truthy. Note that it's implementation is same as `Boolean(value)`, so if you want to ensure `object` or `array` is not empty, you should use [required](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#required) or [minItems](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#maxitems--minitems).

**examples**
```js
export default (
  <root>
    <array keyName="users">
      <string title="User Name" keyName="name" required />
    </array>
  </root>
)
```

![validation with pattern](/docs/assets/guides-writing-schema/required.png)

### Customize Validation

You can customize a validation by adding a `validator` in `validation` object, it's a function recieves the **immutable** value of this field and the `reject` function, so you can do any validation as long as you remember to return the result of calling `reject` with error message when invalid.

Here is an example, in our `editor` component, if you want to ensure the field is empty, `required` prop won't work because it's an object which is always truthy. It this case, you should add a `validtor` to validate the value yourself.

**example**
```js
export default (
  <root>
    <object keyName="about">
      <object
        keyName="content"
        ui="editor"
        title="Content"
        validation={
          {
            validator: (content, reject) => {
              content = content.toJS();
              if (!content || content.html.length === 0) {
                return reject('should be required'); // the message will show on field
              }
            }
          }
        }
      />
    </object>
  </root>
)
```
![validation with pattern](/docs/assets/guides-writing-schema/validator.png)

## Reference
- [All CMS component tags](api-canner-script.md)
- [AJV validate keywords](https://github.com/epoberezkin/ajv#validation-keywords)