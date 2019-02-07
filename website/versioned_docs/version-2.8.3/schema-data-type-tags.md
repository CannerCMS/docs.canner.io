---
id: version-2.8.3-schema-data-type-tags
title: Data Type Tags
sidebar_label: Data Type Tags
original_id: schema-data-type-tags
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

***Data type:***

```js
string
```

> See complete [String components list](/component?selectedKind=String&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;boolean/&gt;

***Data type:***

```js
boolean
```

> See complete [Boolean components list](/component?selectedKind=Boolean&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;number/&gt;

***Data type:***

```js
number
```

> See complete [Number components list](/component?selectedKind=Number&selectedStory=Input&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;object/&gt;

***Data type:***

```js
{[string]: any}
```

> See complete [Object components list](/component?selectedKind=Object&selectedStory=Options&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


### &lt;array/&gt;

***Data type:***

```js
Array<any>
```

> See complete [Array components list](/component?selectedKind=Array&selectedStory=Gallery&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


## Special types

### &lt;date/&gt;

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

> See complete [Date components list](/component?selectedKind=Date&selectedStory=Date&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

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

> See complete [GeoPoint components list](/component?selectedKind=GeoPoint&selectedStory=Map&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

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

> See complete [Image components list](/component?selectedKind=Image&selectedStory=Image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

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

> See complete [File components list](/component?selectedKind=File&selectedStory=Image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

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