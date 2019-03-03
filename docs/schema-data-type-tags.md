---
id: schema-data-type-tags
title: Data Type Tags
sidebar_label: Data Type Tags
---

## Introduction

In canner CMS schema, we force developers to define data types in each field because data sources in platforms GraphQL servers, Prisma, Firebase, Firestore, etc... deal with the data types in various ways. For example, when you're dealing with the `datetime` type, you can either save it as `Date` type if supported in your data source or save as an ISO8601 string.

Furthermore, while developing a component and making a query to the API, we provide additional queries for some data types. For example, a field with an `array` type and objects as children can make a query as below:

```graphql
# images with pagination query
{
  users {
    id

    # get first page images
    images(pagination: {first: 1}) {
      url
    }
}
```

## Common Properties

Here are some common properties for all data types `keyName`, `ui`, and `title`.

### keyName

Define the key name of certain field which will refer to data key in source. For example, if there is a data `{title: 'Title'}` in an object, you can define the string data with `<string keyName="title" />`

### ui

We support several UI components for developers to use in different use cases ([View complete lists](/components)), you can simply choose your UI Component with a string. For examples, `<string keyName="content" ui="textarea">`.

### title

The label of a field.

## Primitive Types

### &lt;string/&gt;

**UI List**

- **input**, the default ui of `<string />`
  ```js
  <string ui="input" />
  ```
- **card**, render multiple cards for user to select, `uiParams.options` is required

  ```js
  <string
    ui="card"
    uiParams={{
      options: [{
        text: 'Value1',
        value: 'VALUE1'
      }, {
        text: 'Value2',
        value: 'VALUE2'
      }]
    }}
  />
  ```

- **link**, render the clickable link below an text input

  ```js
  <string ui="link" />
  ```
- **radio**, let user select from radio component, `uiParams.options` is required.

  ```js
  <string
    ui="radio"
    uiParams={{
      options: [{
        text: 'Value1',
        value: 'VALUE1'
      }, {
        text: 'Value2',
        value: 'VALUE2'
      }]
    }}
  />
  ```
- **select**, let user select from a dropdown menu, `uiParams.options` is required.

  ```js
  <string
    ui="select"
    uiParams={{
      options: [{
        text: 'Value1',
        value: 'VALUE1'
      }, {
        text: 'Value2',
        value: 'VALUE2'
      }]
    }}
  />
  ```
- **textarea**, render a textarea, your can specify the default rows

  ```js
  <string
    ui="textare"
    uiParams={{
      rows: 6
    }}
  />
  ```
- **time**, render a time input with the specific time format

  ```js
  <string
    ui="time"
    uiParams={{
      format: 'HH:mm' // default
    }}
  />
  ```


> Playground [String components list](/component?selectedKind=String&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;boolean/&gt;

**UI List**
- **card**, render two cards for user to select
  ```js
  <boolean
    ui="card"
    uiParams={{
      yesText: 'Yes', // default
      noText: 'No'
    }}
  />
  ```
- **switch**, the default UI, render the switch component for user to toggle.
  ```js
  <boolean
    ui="switch"
    uiParams=={{
      yesText: 'Yes', // default
      noText: 'No'
    }}
  >
  ```

> Playground [Boolean components list](/component?selectedKind=Boolean&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;number/&gt;

**UI List**
- **input**, the default number, render a text input only accepts number
  ```js
  <number
    ui="input"
    uiParams={{
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      unit: ''
    }}
  >

  ```

- **rate**, show the specfic count of stars for user to rate.
  ```js
  <number
    ui="rate"
    uiParams={{
      allowHalf: false,
      count: 5 // default count of stars
    }}
  >
  ```

- **slider**, render the slider component
  ```js
  <number
    ui="slider"
    uiParams={{
      min: 2,
      max: 10,
      step: 2,
      unit: "unit"
    }}
  />
  ```

> Playground [Number components list](/component?selectedKind=Number&selectedStory=Input&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;object/&gt;

**UI List**

- **default**, by default, the object type component directly renders its children components.
  ```jsx
  <object keyName="info">
    <string keyName="name" />
  </object>
  ```
- **editor**, render the editor
  **data type**
  ```
  {
    html: htmlString
  }
  ```
- **options**, this is a component implement condition field, it renders the child which matches the selectedKey. If you want a more flexible condition, take a look at [here](guides-condition-fields.md).

  ```js
  <object
    keyName="options"
    uiParams={{
      options: [{
        title: 'Option1',
        key: 'option1'
      }, {
        title: 'Option2',
        key: 'option2'
      }]
    }}
    ui="options"
  >
    <object keyName="option1">
      {/*...*/}
    </object>
    <object keyName="option2">
      {/*...*/}
    </object>
  </object>
  ```

> Playground [Object components list](/component?selectedKind=Object&selectedStory=Options&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


### &lt;array/&gt;

- **table**, the default ui, is avalible in the first level, pop up a modal if you click the edit button.
  ```js
  <array
    keyName="posts"
    ui="table"
    uiParams={{
      columns: [{
        title: 'Title',
        dataIndex: 'title'
      }, {
        title: 'Description',
        dataIndex: 'description'
        render: decs => desc.substr(0, 20) + '...'
      }]
    }}
  >
    <string keyName="title">
    <string keyName="description">
  </array>
  ```
- **tableRoute**, is available in the first level, change the current route if you click the edit button. In most case, we recommend you use this ui as the component of the first level array since the routes support feature such as [condition field](guides-condition-field.md). Example of changing route: `http://localhost:3000/cms/posts` => `http://localhost:3000/cms/posts/<postId>`

  ```js
  <array
    keyName="posts"
    ui="tableRoute"
    uiParams={{
      columns: [{
        title: 'Title',
        dataIndex: 'title'
      }, {
        title: 'Description',
        dataIndex: 'description'
        render: decs => desc.substr(0, 20) + '...'
      }]
    }}
  >
    <string keyName="title">
    <string keyName="description">
  </array>
  ```
- **tab**, renders the tabPan for each item of array, you can change this position of tab and specify the `titleKey` to show the title of each tabPane.
  ```js
  <array
    keyName="posts"
    ui="tab"
    uiParams={{
      titleKey: 'title',
      position: 'top' // default
    }}
  >
    <string keyName="title"/>
    <string keyName="description"/>
  </array>
  ```
- **panel**, renders the collapsible panel.
  ```js
  <array
    keyName="posts"
    ui="tab"
    uiParams={{
      titleKey: 'title',
    }}
  >
    <string keyName="title"/>
    <string keyName="description"/>
  </array>
  ```
- **slider**, renders a slider for user to select a range, the value of this component must be an array with 2 number.
  ```js
  <array
    keyName="range"
    ui="slider"
    uiParams={{
      min: 0,
      max: 100,
      step: 1,
      unit: 'unit'
    }}
  />
  ```
- **tag**, the value must be an array of string,
  ```js
  <array
    keyName="tags"
    ui="tag"
    uiParams={{
      defaultOptions: ['tag1', 'tag2']
    }}
  />
  ```
- **gallery**, shows an array as a gallery, you can specify the `imageKey` in item. It renders other fields with a popup modal.
  ```js
  <array
    keyName="posts"
    ui="gallery"
    uiParams={{
      imageKey: 'image'
      limitSize: 6000,
      disableDrag: false,
      dirname: ''
    }}
  >
    <string keyName="title" />
    <image keyName="image" />
  </array>
  ```

> Playground [Array components list](/component?selectedKind=Array&selectedStory=Gallery&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


## Special types

### &lt;dateTime/&gt;

ISO8601 without timezone. In other words, the value must postfix with `Z`

***Data type:***

**must** `ISO8601` string with zero UTC offset. [Reference ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

```js
string
```

***Example***

```sh
2018-05-15T08:28Z
```

> Playground [Date components list](/component?selectedKind=Date&selectedStory=Date&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;geoPoint/&gt;

***Data type:***

- lat: latitude
- lng: longtitude
- placeId: google map placeId

```json
{
  lat: number,
  lng: number,
  placeId: string
}
```

***Example***

```json
{
  lat: 33.9259554,
  lng:  -118.38406509999999,
  placeId: "ChIJQap0KLe2woAR46AJ2Vczr1I"
}
```

> Playground [GeoPoint components list](/component?selectedKind=GeoPoint&selectedStory=Map&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;image/&gt;

Static files that are images.

- contentType: Mime type ([Wiki reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types))
- name: Readable for human
- size: In bytes
- url: Public image url

***Data type:***

```js
{
  contentType: string,
  name: string,
  size: number,
  url: string
}
```

***Example***

```js
{
  contentType: "image/jpg",
  name: "mythumb.jpg",
  size: 1233,
  url: "https://image.com/mythumb.jpg"
}
```

> Playground [Image components list](/component?selectedKind=Image&selectedStory=Image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;file/&gt;

Static files that are **not included** in [image types](schema-data-type-tags#lt-image-gt), such as pdf, csv, etc....

- contentType: Mime type ([Wiki reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types))
- name: Readable for humans
- size: In bytes
- url: Public image url


***Data type:***

```json
{
  contentType: string,
  name: string,
  size: number,
  url: string
}
```

***Example***

```json
{
  contentType: "video/mp4",
  name: "cool.mp4",
  size: 1233,
  url: "https://mp4.com/cool.mp4"
}
```

> Playground [File components list](/component?selectedKind=File&selectedStory=Image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;relation/&gt;

You **must** pass a property called `relation` to setup `<relation/>`.

> Note that, relation can only point to the **first level key** in your data.

Settings in `relation` property:

- type: the relation type to one or many, `toOne` will get an object, `toMany` will get a list.
- to: first level data key.

```js
{
  type: 'toOne' | 'toMany',
  to: string
}
```

***Data type(received in component):***

```
Object | Array<any>
```
***Data type(stored in datasource):***

id or idMap
```
string | {[id: string]: boolean}
```

***Example***

We'll use a data as below for example:

```js
{
  users: [{
    name: "Bob",
    topPost: {
      post1: true,
      ...
    }
  }],
  posts: [{
    id: 'post1',
    title: 'post1',
    content: 'post content'
  }, {
    id: 'post2',
    title: 'post2',
    content: 'post content'
  }, {
    id: 'post3',
    title: 'post3',
    content: 'post content'
  }, {
    id: 'post4',
    title: 'post4',
    content: 'post content'
  }]
}
```

**toMany**

Example for `toMany`.

Assuming that you want your `topPost` key to relate to data `posts` (must be the first level key of your data)

```js
// schema
<relation keyName="topPost" relation={{to: 'posts', type: 'toMany'}}>
```

The data is saved as an object `{[id]: true}`

```js
// if user select post1 and post2
{
  topPost: {
    post1: true,
    post2: true
  }
}
```

**toOne**

Example for `toOne`. Say you want your `topPost` key to relate to data `posts` (must be the first level key of your data)

```js
// schema
<relation keyName="topPost" relation={{to: 'posts', type: 'toOne'}}>
```

The data is saved as string `[id]`

```js
// if user select post1
{
  topPost: "post1"
}
```

### &lt;json/&gt;

You can think this type is a wildcard for `any` types, unlike other types, you don't have to declare it's children type.

For example, here is an `object` schema, we have to declare it's children, or `graphql` will throw the error about missing subset in the `info` field:
```js
<object keyName="info">
  <string keyName="title" />
</object>
```

With `<json/>`, you can write this schema as below without declare it's children:
```js
<json keyName="info" />
```

This type is useful when you actually don't know what the type looks like. For example, if you have a field with dynamic fields in it, the data might be

```
{
  key1: 'foo1'
}
```

or

```
{
  key2: 'foo2'
}
```

Using `<json/>` type both data are valid.