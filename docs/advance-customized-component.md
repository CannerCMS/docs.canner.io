---
id: advance-customized-component
title: Customized CMS components
sidebar_label: Customized CMS components
---

## Introduction

Use `packageName` to select your customized component to handle the data.


***npm package***

```js
/** @jsx c */
import c from 'canner-script';

export default (
  <root>
    <array packageName="example-array-gallery">
      <file keyName="imgSrc" />
      <string keyName="imgName" />
    </array>
  </root>
);
```

***your own component***
```js
/** @jsx c */
import c from 'canner-script';
import path from 'path';

export default (
  <root>
    <array packageName={path.resolve(__dirname, 'path/to/example-array-gallery')}>
      <file keyName="imgSrc" />
      <string keyName="imgName" />
    </array>
  </root>
);
```

## Naming

If you are developing customized CMS component you have to fit our naming convention as shown below.

`${prefix}-${type}-${name}`

1. `prefix`: prefix namespace of your package
2. `type`: **must** be one of [component types](advance-component-types.md).
3. `name`: name of package.

Some valid namings:

- `canner-string-editor`
- `canner-file-pdf`
- `google-boolean-switch`

## Canner configuration

Add a new key in your `package.json`. If `canner` key is not set in your `package.json`, `cannerDataType` will default get from your package name `${prefix}-${type}-${name}`.

```js
// your package.json
{
  ...
  canner: {
    cannerDataType: 'array',
    cacheActions: true,
    controlDeployAndResetButtons: true
  }
}
```

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>cannerDataType</td>
    <td>
      <code>
    'array' | 'object' | 'string' | 'number' | 'boolean' | 'geoPoint' | 'date' | 'file' | 'relation'
      </code>
    </td>
    <td>
      <b>Required</b>
    </td>
  </tr>
  <tr>
    <td>cacheActions</td>
    <td>
      <code>
        boolean
      </code>
    </td>
    <td>
      <b>Optional</b>. Wrap a HOC that caches all actions from children. 
    </td>
  </tr>
  <tr>
    <td>controlDeployAndResetButtons</td>
    <td>
      <code>
        boolean
      </code>
    </td>
    <td>
      <b>Optional</b>. If you want your component always control the buttons itself like the UI component table, set to <code>true</code>.
    </td>
  </tr>
</table>

## canner.def.js

`canner.def.js` is used to data structure inside a `object` or `array`. When you customized your own `array` and `object` you **must** define it, or it will cause warning while building your `canner-script` through `webpack`.

> Put `canner.def.js` in the root of your package.

For example, suppose there is an array component called `example-array-gallery` that defines it's structure in `canner.def.js`, that it **must** have two fields called `imgSrc` and `imgName`.

```js
/** @jsx builder */
import builder from 'canner-script';

export default function({attributes, children}) {
  return (
    <array {...attributes}> // {...attributes} is required
      <file keyName="imgSrc" /> // -----> must have
      <string keyName="imgName" /> // -----> must have
      {children} // children is required
    </array>
  );
}
```

> **NOTE:** add `{...attributes}` in `<array/>` is **required**, this will pass it's attributes down, also, `{children}` is also **required** to pass down it's children.

In `schema.js`, you can simply use it without writing it's children.

```js

/** @jsx builder */
import builder from 'canner-script';

export default function({attributes, childre}) {
  return (
    <root>
      <array packageName="example-array-gallery"
        keyName="gallery"
      />
    </root>
  );
}
```

equals to

```xml
<root>
  <array keyName="gallery" packageName="example-array-gallery">
    <file keyName="imgSrc" />
    <string keyName="imgName" /> 
  </array>
</root>;
```

## Customized CMS component

> `React` version must be >= 16.x version

### Object type

Say, you are building a `<object/>` type component your CMS schema should be something like


```xml
<object packageName="your-customize-object">
  // ---------- Children -------------
  <string keyName="name"/>
  <string keyName="content" ui="textarea"/>
  // ---------------------------------
</object>
```

The children will pass into your object component as below.

```jsx
import {Item} from 'canner-helpers';
// The schema looks like:
// {
//   info: {
//     type: 'object',
//     items: {
//       name: {
//         type: 'string' 
//       },
//       content: {
//         type: 'string',
//         ui: 'textarea'
//       }
//     }
//   }
// }
// 
// we simply create a customized object component to render the `info` data
class extends ObjectComponent extends React.Component {
  render() {
    return (
      <div>
        <Item /> // `Item` component will render the children into CMS UI
      </div>
    )
  }
}
```

### Array type

> `refId` is **required** for array components for rendering the right index data and routing.
> You have to pass `refId` to let the children get the correct data of the array.

```jsx
import {Item} from 'canner-helpers';
// assuming the schema looks like:
// {
//   posts: {
//     type: 'array',
//     items: {
//       title: {
//         type: 'string',
//         ui: 'textarea'
//       }
//     }
//   }
// }
class extends ArrayComponent extends React.Component {
  render() {
    const {refId, value} = this.props;
    return (
      <div>
        {
          value.map((v, i) => (
            <Item key={i} refId={refId.child(i)} />
          ))
        }
      </div>
    )
  }
}
```
