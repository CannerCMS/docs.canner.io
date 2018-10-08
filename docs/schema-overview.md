---
id: schema-overview
title: Overview
sidebar_label: Overview
---

## Introduction
Unlike other CMS solutions, Canner CMS provides components for developers to pick and assemble components that fit their needs.

A CMS schema is constructed with the `jsx` syntax, describing the structure of the source data, how to connect to your service, and what the CMS UI should expect in certain fields.

> Normally, CMS schema is stored in `canner.schema.js` file.



## JSX Tags
There are several available tags, as listed below.

**Root**
- \<root />

***Data Types***: Represents the data types of the data:

- \<string />
- \<boolean />
- \<number />
- \<date />
- \<mapPoint />
- \<file />
- \<relation />
- \<array />
- \<object />

***Layouts***: The layouts and appearance of the CMS

- \<Collapse />
- \<Block />
- \<Row />
- \<Col />
- \<Tabs />
- \<Default />
- \<Condition />

***Page***: Provides overview features of the CMS

- \<Page />
- \<Indicator />
- \<Chart />

***Toolbars***:

- \<toolbar />
  - \<sorter />
  - \<filter />
    - \<textFilter />
    - \<numberFilter />
    - \<selectFilter />
  - \<pagination />
  - \<actions />
    - \<filter />
    - \<export />
    - \<import />


### Why

JSX lets developers declare schema in a declarative and intuitive way.

```js
// jsx
<root>
  <object keyName="info">
    <string keyName="name">
  </object>
</root>
```

is equivalent to 

```js
// schema in JSON
{
  info: {
    type: 'object',
    items: {
      name: {
        type: 'string',
      }
    }
  }
}
```

### How

We use `babel` with the `babel-plugin-transform-react-jsx` plugin to parse `jsx` syntax. Choose the `canner-script` as the builder of `jsx` by adding these two lines at the beginning of `canner.schema.js`. ***This is required***.

```js
/** @jsx c */
import c from 'canner-script';
```

***Input***
> NOTE: The comment on the top, it declares `canner-script` as the builder of JSX, and it is **required**.

```jsx
/** @jsx c */
import c from 'canner-script';

modules.export = (
  <root>
    <object keyName="info">
      <string keyName="name">
    </object>
  </root>
);
```

***Output***

```jsx
c('root', null, 
  c('object', {name: 'info'}, 
    c('string', {name: 'name'})
  )
)

// canner-script will internally create a schema object with visitors as below:
{
  schema: info: {
    name: 'info',
    type: 'object',
    items: {
      name: {
        name: 'name',
        type: 'string'
      }
    }
  },
  visitors: []
}
```


## Wrapped in &lt;root/&gt;

The jsx schema **must** be wrapped in the `<root />`. `<root />` will return object with several keys such as `schema`, `pageSchema`, `connector`, `graphqlClient`, `imageStorages`, ...etc. You can find the complete explanation in [root tag](schema-root-tag.md)


***Incorrect***

```jsx
module.exports = (
  <object keyName="test">
    {
      /* other schema */
    }
  </object>
);

// which means
// {
//   type: 'object',
//   name: 'test',
//   items: ...
// }
```

***Correct***
```jsx
module.exports = (
  <root>
    <object keyName="test">
      {
        /* other schema */
      }
    </object>
  </root>
);

// which means
// {
//   schema: {
//     test: {
//       type: 'object',
//       name: 'test',
//       items: ...
//     }
//   },
//   visitors: [],
//   ...
// }
```

## First level tags
The first level tags of <root/> must be one of `<object/>`, `<array/>` and `<page />`, first level tags will eventually become CMS's tabs. Moreover, you could customize how CMS resolve your data pass resolver property into your tabs.

```js
/** @jsx builder */
import builder from 'canner-script';

export default (
  <root>
    <page
      keyName="dashbaord"
      title="Dashboard"
    >
      <chart {...} />
    </page>
    <object
      keyName="info"
      title="Info"
    >
      <string title="Your name" keyName="name"/>
    </object>
    <array
      keyName="products"
      title="Products"
    >
      <string title="Product name" keyName="name"/>
    </array>
  </root>
)
```

## Data Type tags

Type tags are the most basic UI component for CMS.  For example,  you could create a textarea for a string field.

Using textarea UI:

```js
<string ui="textarea">
```

Every UI component should pass a `keyName`, which matches the key name of your data source.

For example, your data is like below

```js
{
  content: "This is your content"
}
```

So your `keyName` should define as `content`

```js
<string ui="textarea" keyName="content">
```

> Further information
> - [All data type tags](schema-data-type-tags.md)
> - [Antd CMS components docs](https://canner.github.io/antd-cms-component-docs)
> - [API of CMS components](api-components.md) 

## Layout tags

Layout tags are used to create grids, containers, and blocks in CMS. This allows your CMS to create customized design layouts for customized visual design.

Every layout tag generates a new `visitor` which is used to edit the component tree will be collected in `root` tag.

For example, there are three fields `name`, `nickname`, and `note` in the `info` object, and we can use `block` tag to separate the three fields into two different blocks.

***without block***
```jsx
/** @jsx c */
import c from 'canner-script';

module.exports = <root>
  <object keyName="info">
    <string keyName="name" />
    <string keyName="nickname" />
    <string keyName="note" ui="editor"/>
  </object>
</root>
```

***with block***
```jsx
/** @jsx c */
import c, {Block} from 'canner-script';

module.exports = <root>
  <object keyName="info">
    <Block title="Basic Info">
      <string keyName="name" />
      <string keyName="nickname" />
    </Block>
    <Block title="Other Info">
      <string keyName="note"  ui="editor"/>
    </Block>
  </object>
</root>
```

> Further information
> - [All layout tags](schema-layout-tags.md)  

## Toolbar tags

Toolbar tags provide additional features for users to build a powerful CMS, such as `filter`, `sort`, `pagination`, `export`, `import`, ...etc. They only can be put into **first level array** and **relation field**.

**examples**

```
<root>
  <array keyName="posts">
    <toolbar>
      <filter>
        <numberFilter field="views" lable="Views">
        <selectFilter
          label="Status"
          options={[{
            text: 'All',
            condition: {}
          }, {
            text: 'Published',
            condition: {
              draft: {
                eq: false
              }
            }
          }]}
        />
      </filter>
      <sort defaultOption="views" options={[{
        field: 'views',
        label: 'Views'
      }]}>
      <pagination>
    </toolbar>
  </array>
</root>

```
> Further information
> - [All toolbar tags](schema-toolbar-tags.md)  


## Page tags

Pages tags are used to create the additional page that is not included the data, such as dashboard or overview page. You can use `indicator` and `chart` to show the data.

**examples**

```
<root>
  <page keyName="dashboard">
    <indicator
      ui="amount"
      keyName="productsPie"
      graphql={`
        query products {
          products {

          }
        }
      `}
      getValue={v => v.length}
    >
  </page>
  <array keyName="products">
    <string keyName="name" title="Name" />
    {...}
  </array>
</root>

```
> Further information
> - [All page tags](schema-page-tags.md)  
