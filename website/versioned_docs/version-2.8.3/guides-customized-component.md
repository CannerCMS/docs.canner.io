---
id: version-2.8.3-guides-customized-component
title: Customized CMS Component
sidebar_label: CMS Component
original_id: guides-customized-component
---

## Introduction

Use `packageName` to select your customized component to handle the data.

> - packageName **must** be a literal string, cannot be a variable
> - If you want to load your package in your file system, you must use **relative or absolute path** start with `./` or `/`. Otherwise, it will be treated as a package in `node_modules`


***npm package***

```js
import CannerScript from 'canner-script';

export default (
  <root>
    <array packageName="example-array-gallery">
      <image keyName="imgSrc" />
      <string keyName="imgName" />
    </array>
  </root>
);
```

***your own component***
```js
import CannerScript from 'canner-script';
import path from 'path';

export default (
  <root>
    <array packageName={path.resolve(__dirname, 'path/to/example-array-gallery')}>
      <image keyName="imgSrc" />
      <string keyName="imgName" />
    </array>
  </root>
);
```

## Naming

If you are developing customized CMS component you have to fit our naming convention as shown below.

`${prefix}-${type}-${name}`

1. `prefix`: prefix namespace of your package
2. `type`: **must** be one of [data types](schema-data-type-tags.md).
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
    'array' | 'object' | 'string' | 'number' | 'boolean' | 'geoPoint' | 'date' | 'file' | 'relation' | 'json'
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
import CannerScript from 'canner-script';

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
import CannerScript from 'canner-script';

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


## Get Value

In your customize component, canner will fetch and parse the data corresponding the given [schema](guides-schema-overview.md), so you can directly get the value from the props.

## Change Value

You can use `onChange` method to mutate the data with the arguments, `refId`, `action`, `value`.

<table>
  <tr>
    <th>name</th>
    <th>type</th>
  </tr>
  <tr>
    <td>refId</td>
    <td>
      <code>
      Ref | {firstRefId: RefId, secondRefId: RefId}
      </code>
    </td>
  </tr>
  <tr>
    <td>action</td>
    <td>
      <code>
      'update' | 'create' | 'delete' | 'swap'
      </code>
    </td>
  </tr>
  <tr>
    <td>value</td>
    <td>
      <code>
      boolean | number | string | array | object
      </code>
    </td>
  </tr>
</table>

### RefId

`refId` is the instance of [RefId](https://github.com/Canner/canner/blob/canary/packages/canner-ref-id/src/index.js) which represents the position of the component in the data. Every component will receive a unique `refId`, so we can use it to let canner know what data I want to edit.


**data**
```json
{
  info: {
    name: {
      first: 'First Name',
      last: 'Last Name'
    }
  },
  posts: [{
    info: {
      description: 'post description'
    }
  }]
}
```
The `name` and the `posts` refIds in the data above.

**example**

```js
const nameId = new RefId('info/name');
console.log(nameId.getPathArr());
// ['info', 'name']
console.log(nameId.toString());
// 'info/name'
console.log(nameId.child('first').toString());
// 'info/name/first
console.log(nameId.remove().toString());
// 'info'
const postsId = new RefId('posts/0/info');
console.log(postsId.getPathArr());
// ['info', '0']
console.log(postsId.toString());
// 'info/0'
console.log(postsId.child('description').toString());
// 'info/0/description
console.log(postsId.remove().toString());
// 'info'
```

### Usage

#### Create Action

The refId should point to an array.

```js
// correct
onChange(new RefId('posts'), 'create', newItem)
// incorrect
onChange(new RefId('posts/0'), 'create', newItem)

```

The third argument is optional, if yout don't give it, canner will automatically create an empty data according the schema.

```js
// posts schema
// {
//   posts: {
//     type: 'array',
//     items: {
//       type: 'object',
//       items: {
//         title: {
//           type: 'string'
//         }
//       }
//     }
//   }
// }
onChange(new RefId('posts'), 'create');
// eqauls to
onChange(new RefId('posts'), 'create', {title: ''});
```

#### Update Action

[TODO]

This action is most common used. The actual behavior is `set`, so if you want to update an object data, merge with the origin data first.

For an example, a customized component for the name field in the data below:

```js
{
  info: {
    name: {
      first: 'First',
      last: 'Last'
    }
  }
}
```

```js
// --- in react component---
onFirstNameChange = newValue => {
  const {ref, onChange, value} = this.props;
  // call onChange with mergedValue
  //
}

render() {
  return (
    <React.Fragment>
      <React.
    </React.Fragment>
  )
}
//---------------------------

```
#### Delete Action
[TODO]

#### Swap Action
[TODO]

## Examples

> `React` version must be >= 16.3 version

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
