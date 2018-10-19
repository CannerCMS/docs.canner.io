---
id: schema-type-tags
title: Type Tags
sidebar_label: Type Tags
---

## Introduction

Type tags is tags **not rendering CMS UI, but solely declaring it's types**.

> Type tags can only be [first level tags](schema-overview#first-level-tags)

This is mostly use with [`<Page/>` tags](schema-page-tags.md), Since **Page tags** have the power to access data from anywhere, which means access some data that you might not want to appear in your CMS.

> `GraphQL` is the underlying query language Canner use to send queries. And will build a data interface by declaring Canner schema, so every data **must clearly declare** it's types.

**Example**

If you want to build a chart using `users` data, but you don't want to appear in your CMS.

```jsx
<component
  ui="bar"
  keyName="user-bar"
  uiParams={userBarUIConfig}
  graphql={
    `
      query users {
        users(first: 10) {name age}
      }
    `
  }
/>
```

Type tags is used to declare certain data type without render anything in UI.

```jsx
// We declare an array type
<arrayType>
  // inside the array have two types, one is name, and another is age.
  <string keyName="name"/>
  <number keyName="age"/>
</arrayType>
```

## &lt;arrayType/&gt;

> Type tags can only be [first level tags](schema-overview#first-level-tags)

This is equivalent to [`<array/>`](schema-data-type-tags#lt-array-gt), but the children of `<arrayType/>` only need to provide `keyName` setting.

```jsx
// We declare an array type
<arrayType>
  // Inside of the Type tag, usage is mostly like array tag.
  <string keyName="name"/>
  <number keyName="age"/>
</arrayType>
```

## &lt;objectType/&gt;

> Type tags can only be [first level tags](schema-overview#first-level-tags)

This is equivalent to [`<object/>`](schema-data-type-tags#lt-object-gt), but the children of `<objectType/>` only need to provide `keyName` setting.


```jsx
// We declare an object type
<objectType>
  // Inside of the Type tag is just like object tag
  <string keyName="name"/>
  <number keyName="age"/>
</objectType>
```