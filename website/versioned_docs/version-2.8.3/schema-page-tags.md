---
id: version-2.8.3-schema-page-tags
title: Page Tags
sidebar_label: Page Tags
original_id: schema-page-tags
---

## Introduction

Page tags are designed to create a **dashboard/admin-like** page, which lets you have an overview of your data.

Canner supports two page tags, `<page>` and `<component>`, which work differently than [Data Type Tags](schema-data-type-tags.md). Page's `keyName` is not reference to data, instead it is only a unique id for each component. Each tags could access to any data in the database by querying through `graphql` property.

![vega](/docs/assets/schema-page-tags/vega.png)

For example, the schema below can be used to create a dashboard page shows about the statistics of a blog's users and posts.

***Usage***

```jsx
<root>
  <page keyName="overview">
    <Row>
      <Col>
        <component
          ui="amount"
          keyName="totalUsers"
          packageName="@canner/antd-indicator-amount"
          graphql={
            `
              query users {
                users {name age}
              }
            `
          }
          title="Total users"
          uiParams={{
            formatter: v => `${v}`
          }}
          transformData={v => v.length}
        />
      </Col>
      <Col>
        <component
          keyName="posts"
          packageName="@canner/antd-indicator-list"
          graphql={
            `
              query posts {
                posts(first: 10) {title image}
              }
            `
          }
          uiParams={postUIParams}
        />
      </Col>
    </Row>
    <Col>
      <component
        keyName="user-bar"
        uiParams={userBarUIConfig}
        packageName="@canner/victory-bar"
        graphql={
          `
            query users {
              users(first: 10) {name age}
            }
          `
        }
      />
    </Col>
  </page>
</root>
```

## &lt;page/&gt;

Page tag is one of the [first level tag](schema-overview#firstleveltags), you can use it to create a page whose route is same as the `keyName` property.

## &lt;component /&gt;

Unlike [data tags](schema-data-type-tags), there is no `ui` property in `<component/>` tag, you have to give it a `packageName` property instead. It provides you a way to simply use your react components.

***IMPORTANT:*** `<component/>` tag provides `graphql` property to access any data in your data sources, but you will need to declare your data types before accessing your data. If you don't want your data to render into UI, you can use [Type tags](schema-type-tags.md).


### Common Properties

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>packageName</td>
    <td><code>string</code></td>
    <td>It can be a name or path of a node modules.</td>
  </tr>
  <tr>
    <td>graphql</td>
    <td><code>string</code></td>
    <td>The graphql query. Canner uses it to fetch the data for the component.</td>
  </tr>
  <tr>
    <td>transformData</td>
    <td><code>* => *</code></td>
    <td>Transform the data which is fetched from graphql query, so that the component can directly receive the data it needs. </td>
  </tr>
</table>

### Victory Chart

> [Victory](https://formidable.com/open-source/victory/) is an opinionated, but fully overridable, ecosystem of composable React components for building interactive data visualizations

To generate chart components with Victory, see [victory-canner-components](https://github.com/Canner/victory-canner-components).

#### Example

```js
 <component
  packageName="@canner/victory-area"
  keyName="victory-area"
  transformData={data => {
    return data.map(datum => ({
      x: datum.type,
      y: datum.value
    }));
  }}
  graphql={`
    query {
      data {
        type
        value
      }
    }
  `}
/>
```

### Vega Chart
> [Vega](https://vega.github.io/vega/) is a visualization grammar, a declarative language for creating, saving, and sharing interactive visualization designs. With Vega, you can describe the visual appearance and interactive behavior of a visualization in a JSON format, and generate web-based views using Canvas or SVG.


To generate chart components with Vega, see [vega-canner-components](https://github.com/Canner/vega-canner-components).

#### Example

```js
<component
  packageName="@canner/vega-chart-bar"
  keyName="vega-bar"
  uiParams={{
    fill: "#07a4b8",
    x: {
      field: "type",
      title: "Types"
    },
    y: {
      field: "value",
      title: "Value"
    },
    height: 200,
    width: "100%"
  }}
  transformData={data => data}
  graphql={`
    query {
      chart {
        type
        value
      }
    }
  `}
  />
```
