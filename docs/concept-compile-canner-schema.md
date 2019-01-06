---
id: concept-compile-schema
title: How compiling CMS schema works?
sidebar_label: Compile schema
---

There are four stages from building your CMS schema to rendering the whole user interface. The first two steps are executed in `canner-schema-loader`, which is a `webpack-loader` that compiles your schema into trees, the third and fourth steps are executed at runtime stage.

Four stages

- [Stage 1: Transformation](#stage-1--transformation)
- [Stage 2: Compiliation](#stage-2--compiliation)
- [Stage 3: Prerendering](#stage-3--prerendering)
- [Stage 4: Rendering](#stage-4--rendering)
- [What is a visitor?](#what-is-a-visitor)

## Stage 1: Transformation

[canner.schema.js](guides-writing-schema.md) is a configuration file that describes your data structure and CMS user interfaces and it is written in the `jsx` language.

So the first stage of the workflow is transforming `jsx` to a JSON object called schema object.

Importing `canner-script` library is needed and the variable must called `CannerScript`.

```jsx
import CannerScript from 'canner-script';
```

***canner.schema.js***

```jsx
import CannerScript from 'canner-script';

module.exports = <root>
  <object keyName="info" title="Info">
    <string keyName="name" title="Name" />
  </object>
</root>
```

***schema object***
```js
{
  info: {
    type: 'object',
    title: 'Info',
    keyName: 'info',
    items: {
      name: {
        type: 'string',
        title: 'Name',
        keyName: 'name'
      }
    }
  }
}
```

## Stage 2: Compiliation

In this stage, we use schema object to compile  into [ComponentTree](concept-component-tree.md).

## Stage 3: Prerendering

Before rendering, we have to wrap all components with necessary [High order components](concept-hocs.md), these high order components will deal with arithmetic logics and manipulations for components such as `routing`, `relation data`, etc....

## Stage 4: Rendering

Finally, the CMS will render.

## What is a visitor?

> The visitor in Canner is like a babel [visitor](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-visitors).

A visitor is an object containing one or more functions which are used to edit the `ComponentTree` , when Canner compiler traverses the `componentTree`, it will find the corresponding visitor on each node and execute the function to modify the tree. This mechanism allows Canner to seperate the `layouts` from the data entry component.