---
id: concept-component-tree
title: ComponentTree
sidebar_label: ComponentTree
---

## Introduction

**ComponentTree** is the output result of `canner-compiler` and is used to collect the full information, including the interactions between components.

Below is how a component tree might looks like.

```js
// a component tree
{
  posts: {
    component: 'body',
    children: [{
      type: 'array',
      ui: 'table',
      keyName: 'posts',
      pattern: 'array',
      path: 'posts',
      items: CannerSchema,
      component: React.ReactComponentType<*>,
      children: [{
        type: 'string',
        ui: 'input',
        keyName: 'title',
        pattern: 'array.string',
        path: 'posts/input',
        component: React.ReactComponentType<*>,
        ...
      }],
      ...
    }],
    ...
  },
  info: {
    ...
  }
}

```

Take a look at the component tree above, you can find some similar patterns in it.

## ComponentNode

`ComponentNode` is an object that includes a React Component in its `component` field, indicating which React component it should render in the section.

In other words, the `ComponentTree` is a map of `ComponentNode`s.

The following are some examples of `ComponentNode`

### Basic

```js
{
  component: 'body',
  children: [...]
}
```

### Array node

```js
{
  type: 'array',
  ui: 'table',
  keyName: 'posts',
  pattern: 'array',
  path: 'posts',
  items: CannerSchema,
  component: React.ReactComponentType<*>,
  children: ...
}
```

### String node

```js
{
  type: 'string',
  ui: 'input',
  keyName: 'title',
  pattern: 'array.string',
  path: 'posts/input',
  component: React.ReactComponentType<*>,
  ...
}
```


## Render

Rendering a CMS from a `ComponentTree` is simple, Canner CMS internally traverses the tree and render components of each node.

> Note: Canner CMS uses function called `renderChildren` in components to render it's children instead of traversing over components.


