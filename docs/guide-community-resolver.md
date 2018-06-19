---
id: guides-community-resolver
title: Resolver
sidebar_label: Resolver
---

## Use in Canner

Pass a resolver map to `CMS` component.

```js
import React from 'react';
import {CMS} from 'canner';

const postsResolver = {
  Fields: {
    fullName: {
      resolve: (rootValue) => {rootValue.firstname + rootValue.lastname};
      create: () => { return undefined; }
      update: () => { return undefined; }
    }
  }
}
export default class App extends React.Component (
  render() {
    return <CMS
      {...}
      resolver={{
        posts: postsResolver
      }}
    />
  }
);
```
