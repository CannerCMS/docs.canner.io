---
id: version-2.8.3-guides-canner-container
title: Canner Container
sidebar_label: Canner Container
original_id: guides-canner-container
---

`@canner/container` is a component that renders sidebar, navbar and provides the features that are not included in [`Canner component`](guides-canner).

For examples, the code below will **ONLY** generate the UI of CMS form without sidebar and navbar, etc.

```jsx
import Canner from 'canner';
import schema from './canner.schema.js';
// ...
render() {
  return (
    <Router>
      <Route path="/cms" render={({history}) => {
        return (
          <Canner
            schema={schema}
            ...
          />
        );
      }}/>
    </Router>
  );
);
```

Preview as below:

![render CMS without container](/docs/assets/advance-canner-container/without-container.png)


With `@canner/container`, you can generate the extra components.

![render CMS with container](/docs/assets/advance-canner-container/with-container.png)


## Usage

Put the `canner` inside `@canner/container` and pass **schema**, **router**, **sidebarConfig** and **navbarConfig** as props to the `@canner/container`, this will generate full CMS for you. Remember the properties of `canner`, **schema**, **routes**, **routerParams**, **dataDidChange**, **baseUrl** and **goTo** will be passed by `@canner/container` so you don't need to pass them again.


```jsx
...
import Canner from 'canner';
import Container from '@canner/container';
...

<Container
   schema={schema}
   router={router}
   sidebarConfig={SidebarConfig}
   navbarConfig={{navbarConfig}}
>
  <Canner />
</Container>
```

### Properties

#### schema

> see [Canner Schema](schema-overview.md)

#### router

> see [Canner Router](guides-canner-router.md)

#### sidebarConfig

`@canner/container` will use `sidebarConfig` to generate the sidebar.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>sidebarConfig</td>
    <td>
<pre><code>{
  menuConfig: MenuConfig | boolean
}
</code></pre></td>
    <td>
      menuConfig property can be:
      <li><code>MenuConfig (object)</code>: Render the sidebar with given the object.</li>
      <li><code>false</code>: Render without the sidebar.</li>
      <li><code>true</code>: Render a sidebar according to the given schema.</li>
    </td>
  </tr>
</table>

Variables definition:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>MenuConfig</td>
    <td>
<pre><code>Array<
  SubmenuConfig | MenuItemConfig
>
</code></pre>
    </td>
    <td>The type of <code>SubmenuConfig</code> or <code>MenuItemConfig</code></td>
  </tr>
  <tr>
    <td>SubmenuConfig</td>
    <td>
<pre><code>{
  title: string,
  items: Array&lt;MenuItemConfig>
}
</code></pre>
    </td>
    <td>Generate the submenu</td>
  </tr>
  <tr>
  <td>MenuItemConfig</td>
    <td>
<pre><code>{
  title: string,
  pathname: string,
  params?: {
    operation?: 'create' | 'update',
    defaultPayload?: string,
    filter?: string
  }
}</code></pre>
    </td>
    <td>Generate the menu item</td>
  </tr>
</table>

**Example**

```js
{
  menuConfig: [{
    title: 'Posts',
    pathname: '/posts',
    params: {
      operation: 'create'
    }
    items: [...]
  }]
}
```

#### navbarConfig

`@canner/container` will use `navbarConfig` to generate the navbar. Navbar can be divided to three parts from left to right: logo, menu, and save button.

![Three parts of Navbar](/docs/assets/advance-canner-container/navbar.png)

To control the navbar elements you can use `logo`, `renderMenu`, `showSaveButton` in `navbarConfig` to control them.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>navbarConfig</td>
    <td>
<pre><code>{
  logo: string, 
  renderMenu: () => React.Node,
  showSaveButton: boolean
}</code></pre></td>
    <td><code>logo</code>: image url</li></td>
  </tr>
</table>

**Example**

```
{
  logo: <Logo src="https://cdn.canner.io/cms-page/d89f77c19e5d3aa366ba1498dddd64ef.svg" />,
  showSaveButton: true,
  renderMenu: () => {}
}
```