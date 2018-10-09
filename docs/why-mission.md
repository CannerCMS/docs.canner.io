---
id: why-mission
title: Our mission
sidebar_label: Our mission
---

Canner CMS's concept is radically different from other CMS frameworks. At Canner Inc., we spend the past three years seeking for best solutions to solve some major problems we find in current CMS solutions as below.

Thanks to modern technologies, such as `Babel`, `React`, `GraphQL`, `Apollo`, `Webpack` to make Canner CMS posssible.

***[flexibility](#1-flexibility), [adaptivity](#2-adaptivity), [simplicity](#3-simplicity), [scalability](#4-scalability), [modularity](#5-modularity)*** are the 5 major missions we try to solve at Canner. Following sections we'll talk about these 5 aspects.

> Learn more about [Why we build Canner?](why-canner.md)

## 1. Flexibility

Web applications have been a lot complex and wide range of usages. **Flexibility** is one of the biggest missions when we design Canner.

You can think Canner CMS as a container that could become any kind of usages.

If you want a form that contains name, content. You could construct it through our CMS schema.

```js
<root>
  <object keyName="form">
    <string keyName="name"/>
    <string keyName="content" ui="editor"/>
  </object>
</root>
```

Now, you want an array of form, just wrap with `<array/>`, and that's it!

```js
<root>
  <array keyName="list" ui="tabs">
    <object keyName="form">
      <string keyName="name"/>
      <string keyName="content" ui="editor"/>
    </object>
  </array>
</root>
```

As you see, Canner CMS schema's flexibility open a new opportunity, to build tens of thousands of CMS applications using Canner.

> To learn more about [Canner Schema](schema-overview)

## 2. Adaptivity

As backend and database services springing up in modern technology stack. We design a adaptive interface that could easily connect to different sources and APIs.

> In order to achieve that we unify APIs into **GraphQL** interfaces.

Change to different data source is as simple as change one line of code

```js
// add a condition to check if firebase is initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAwzjZJD7SUCRC42mL7A9sw4VPIvodQH98',
    authDomain: 'apollo-test-2c6af.firebaseapp.com',
    databaseURL: 'https://apollo-test-2c6af.firebaseio.com',
    projectId: 'apollo-test-2c6af',
    storageBucket: '',
    messagingSenderId: '84103499922'
  });
}

const defaultApp = firebase.app();
const connector = new FirebaseRtdbClientConnector({
  database: defaultApp.database()
});

export default class App extends React.Component (
  render() {
    return (
      <Canner
        schema={schema}
        revolver={resolver}
        {/* use firebase connector */}
        connector={connector}
      />
    );
  }
}
```

### Connectors

Changing data sources by passing **connector** to your source.

> Learn more about [connector](guides-connector.md)

### Resolvers

Transform data structure to fit your need by using **resolver**.

> Learn more about [resolver](guides-resolver)

## 3. Simplicity

Building CMS by your own, can truely hard and complex because it consist by views and logics (validation, cache, relation, authentication, etc...). Using Canner build your CMS without knowing these problems, we'll take care of it.

### Declare in one line code

We design CMS component as unit. And you can use it in one line.

For example you need a slider, just declare

```xml
<number ui="slider" uiParams={{min: 20, max: 70}} />
```

As for editor

```xml
<object keyName="editor" ui="editor"/>
```

> See all [UI list here](/component)

### CMS structure as code

Canner provide flexible CMS infrastructure, allowing developers to assemble CMS interface that adapts to specifications.

Here's an example for a blog post, you can replace and modify any specification easily.

```xml
<root>
  <object
    keyName="post"
    title="Post">
    <string
      keyName="title"
      title="Title"/>
    <string
      keyName="content"
      title="Content"
      ui="editor"/>
    <file
      keyName="image"
      title="Image"
      ui="image"
      description="Your post image"/>
  </object>
</root>
```

> Learn more about [CMS schema](schema-overview)

## 4. Scalability

Canner is proved can be built from small to large applications by using our **Canner schema**. And many of our users use our CMS framework to implement into their services such as chatbots, e-commerce, blog platforms.

## 5. Modularity

Everything in Canner CMS is a component (or called modules), you could build your own and import into our CMS without side-effects.

Using your costomized component is as simple as passing a prop.

```js
/** @jsx c */
import c from 'canner-script';

export default (
  <root>
    {/* array is a customize component */}
    <array packageName="example-array-gallery">
      <file keyName="imgSrc" />
      <string keyName="imgName" />
    </array>
  </root>
);
```

> Learn more about [Customize your Canner CMS component](guides-customized-component)

## Conclusion

While some might think CMS is a crowded category, but believe CMS still a lot of new imagination and vision that no one have tried before.