---
id: schema-page-tags
title: Page Tags
sidebar_label: Page Tags
---

## Introduction

Page tags are designed to create a **dashboard/admin-like** page, which lets you have an overview of your data.

`<page/>`, `<indicator/>` and `<chart/>` tags works differently than [Data Type Tags](schema-data-type-tags.md). Page's `keyName` is not reference to data, instead it is only a unique id for each component. Each tags could access to any data in the database by querying through `graphql` property.

## Basic Page

Canner supports `<page>`, `<indicator>` and `<chart>` page tags. For example, the schema below can be used to create a dashboard page shows about the statistics of a blog's users and posts.

***Usage***

```xml
<root>
  <page keyName="overview">
    <Row>
      <Col>
        <indicator
          ui="amount"
          keyName="totalUsers"
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
          getValue={v => v.length}
        />
      </Col>
      <Col>
        <indicator
          ui="list"
          keyName="posts"
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
      <chart
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
    </Col>
  </page>
</root>
```

### &lt;page/&gt;

This tag is the root tag of the other page tags. All its children will be rendered as a page content.

### &lt;indicator ui="amount" /&gt;

Display a value in a card form.

**Properties**

- `keyName`: A unique key
- `graphql`: The graphql string to fetch the data
- `getValue`: Get the vaule from fetched data
- `uiParams`: For more detailed UI settings
  - `formatter`: Format the value for the final view

**Example:**

```xml
 <indicator
  ui="amount"
  keyName="totalUsers"
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
  getValue={v => v.length}
/>
```

### &lt;indicator ui="list" /&gt;

Display data as a [antd list](https://ant.design/components/list/).

**Properties**

- `keyName`: A unique
- `graphql`: The graphql string to fetch the data
- `uiParams`: For more detailed UI settings

```xml
<indicator
  ui="list"
  keyName="posts"
  graphql={
    `
      query posts {
        posts(first: 10) {title image}
      }
    `
  }
  uiParams={{
    avatar: value => (
      <Avatar // antd
        src={value.image && value.image.url}
        style={{color: '#f56a00', backgroundColor: '#fde3cf'}}
      >
        {value.title}
      </Avatar>
    ),
    title: value => value.title,
    description: () => null,
    content: () => null
  }}
/>
```

### &lt;chart /&gt;

Create charts.

**Properties**
- `keyName`: A unique key.
- `ui`: Chart type. `line`, `bar`, `pie` or `scatter`
- `graphql`: The graphql string to fetch the data
- `uiParams`: For more detailed UI settings

***ui="line" uiParams:***

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>interpolate</td>
    <td><code>string // default linear</code></td>
    <td>"basis" | "cardinal" | "catmull-rom" | "linear" | "monotone" | "natural" | "step" | "step-after" | "step-before"</td>
  </tr>
  <tr>
    <td>x</td>
    <td><code>{
    field: string,
    scale?: string, // default linear
    title?: string
  }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>y</td>
    <td><code>{
    field: string,
    scale?: string, // default linear
    title?: string
  }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>fill</td>
    <td><code>string // default #1890ff</code></td>
    <td>color</td>
  </tr>
</table>

***ui="bar" uiParams:***

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>x</td>
    <td><code>{
    field: string,
    scale?: string, // default linear
    title?: string
  }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>y</td>
    <td><code>{
    field: string,
    scale?: string, // default linear
    title?: string
  }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>fill</td>
    <td><code>string // default #1890ff</code></td>
    <td>color</td>
  </tr>
</table>

***ui="pie" uiParams:***

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>field</td>
    <td><code>string</code></td>
    <td></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>color</td>
    <td><code>{<br/>
      range?: string, // default category20<br/>
      field?: string // default id<br/>
    }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales/#range">range</a></td>
  </tr>
   <tr>
    <td>sort</td>
    <td><code>boolean // default false</code></td>
    <td>optional</td>
  </tr>
</table>


***ui="scatter" uiParams:***

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>x</td>
    <td><code>{
    field: string,
    scale?: string, // default linear
    title?: string
  }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>y</td>
    <td><code>{
    field: string,
    scale?: string, // default linear
    title?: string
  }</code></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>text</td>
    <td><code>{
      field: string
    }</code></td>
    <td>The text of field will be shown once the hover event is fired</td>
  </tr>
  <tr>
    <td>fill</td>
    <td><code>string // default #1890ff</code></td>
    <td>color</td>
  </tr>
</table>


**Chart example**

```xml
<chart ui="bar"
  keyName="user-bar"
  graphql={
    `
      query users {
        users(first: 10) {name age}
      }
    `
  }
  uiParams={{
    height: 150,
    width: 200,
    color: {
      field: 'name'
    },
    x: {
      field: 'name'
    },
    y: {
      field: 'age'
    }
  }}
/>
```