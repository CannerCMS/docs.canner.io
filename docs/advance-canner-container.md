---
id: advance-canner-container
title: Canner Container
sidebar_label: Canner Container
---

`CannerContainer` is a component that renders sidebar, navbar and provides the features that are not included in `CannerCMS`.

For examples, the code below will **ONLY** generate the UI of `CMS form` without sidebar and navbar, etc.

```jsx
import Canner from 'canner';
import schema from 'canner.schema.js';
// ...
render() {
  return (
    <Router>
      <Route path="/cms" render={({history}) => {
        return (
          <Canner
            schema={schema}
            routes={router.getRoutes()}
            goTo={router.goTo}
            ...
          />
        );
      }}/>
    </Router>
  );
);
```

![render CMS without container](/docs/assets/advance-canner-container/without-container.png)


With `CannerContainer`, you can generate the extra components.

![render CMS with container](/docs/assets/advance-canner-container/with-container.png)


## Usage

Put the `<Canner>` inside `<Container>` and pass **schema**, **router**, **sidebarConfig** and **navbarConfig** as props to the `<Container>`, this will generate full CMS for you.


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
  <Canner
    ...
  />
</Container>
```

### Properties

#### schema

> see [Canner Schema](schema-overview.md)

#### router

> see [Canner Router](advance-canner-router.md)

#### sidebarConfig

`CannerContainer` will use `sidebarConfig` to generate the sidebar.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>sidebarConfig</td>
    <td><code>{<br/>
      menuConfig: MenuConfig | boolean<br/>
      }</code></td>
    <td>
      <li><code>MenuConfig object</code>: Render the sidebar with given the object.</li>
      <li><code>false</code>: Render without the sidebar.</li>
      <li><code>true</code>: Render a sidebar according to the given schema.</li>
    </td>
  </tr>
  <tr>
    <td>MenuConfig</td>
    <td>
      <code>
        Array&lt;<br/>SubmenuConfig | MenuItemConfig<br/>>
      </code>
    </td>
    <td>The type of <code>SubmenuConfig</code> or <code>MenuItemConfig</code></td>
  </tr>
  <tr>
    <td>SubmenuConfig</td>
    <td>
      <code>
        {<br/>
          title: string,<br/>
          items: Array&lt;MenuItemConfig><br/>
        }
      </code>
    </td>
    <td>Generate the antd submenu</td>
  </tr>
  <tr>
  <td>MenuItemConfig</td>
    <td>
      <code>
        {<br/>
        title: string,<br/>
        pathname: string,<br/>
        params?: {<br/>
          operation?: 'create' | 'update',<br/>
          defaultPayload?: string,<br/>
          filter?: string<br/>
        }
      </code>
    </td>
    <td>Generate the antd menu item</td>
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

`CannerContainer` will use `navbarConfig` to generate the navbar. A navbar can be divided to three parts from left to right: logo, menu, and save button. And there are three properties corresponding to the three parts on navbar.

![Three parts of Navbar](/docs/assets/advance-canner-container/navbar.png)


<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>navbarConfig</td>
    <td><code>{<br/>
      logo: string, <br/>
      renderMenu: () => React.Node,<br/>
      showSaveButton: boolean<br/>
    }</code></td>
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