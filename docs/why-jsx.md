---
id: why-jsx
title: Why Canner use JSX as schema?
sidebar_label: Why Canner use JSX?
---

The goal of Canner is to build a universal CMS framwork, which should be flexible in terms of data sources and UI. Therefore, we need a configuration interface let developers construct data source and UI all at once. There are some reasons why we choose `JSX` over `JSON`, `YAML`, etc.

## Declarative

We want the configuration to be declarative. With `JSX`, developers can control what their CMS should look like by writing XML-like tags and also have the full power of JavaScript.

## Readability

The UI of a CMS could be quite complex. Not only it could contain nested components, but you also need to manage arguments and data types of all the fields. Comparing to `JSON` and `YAML`, `JSX` comes with the full power of JavaScript syntax, also you could easily manage your scripts by importing different `js` files, or group components as a variable, so developers can easily construct the whole CMS just like writing JavaScript files.

Comparing to writing your CMS with configuration like `pure-XML` or `YAML`, writing `JSX` is easier for a JavaScript developer. 
Let’s compare `YAML` and `JSX`:

```yaml
pagination:
  perPage: 10
sort:
- key: createdAt
components:
- type: array
  keyName: post
  children:
  - type: string
    keyName: title
```

```jsx
<root>
  <array keyName="post">
      <toolbar>
          <pagination perPage={10} />
          <sort defaultSort="createdAt" />
      </toolbar>
      <string keyName="title" />
    </array>
</root>
```
JSX looks a lot better to read, right?

## Data flow logic
When it comes to data flow, sometimes we need declare arguments or create instances, functions more than simple primary types. For example, in `JSX`, we can write following code:

```js
const connector = new FirebaseConnector({
  ...firebaseConfigs,
  fieldTransform: {
    name: data => `${data.firstName} ${data.lastName}`
  }
})
```

This kind of logic is impossible in static configuration like `JSON` or `YAML`.

## Customization
`JSX` is actually JavaScript, so with `JSX` as configuration, Canner import customized packages natively such as `React` components into our framework.

```jsx
<root>
  <array keyName="post">
    <string packageName="../path/to/customized-component" />
  </array>
</root>
```