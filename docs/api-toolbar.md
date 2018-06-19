---
id: api-toolbar
title: Toolbar
sidebar_label: Toolbar
---

## Toolbar

There are three types of toolbar component that you can customize.

### Sort

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>orderField</td>
    <td><code>string</code></td>
    <td></td>
  </td>
  <tr>
    <td>orderType</td>
    <td><code>'ASC' | 'DESC'</code></td>
    <td></td>
  </tr>
  <tr>
    <td>options</td>
    <td><code>Array<{key: string, title: string}></code></td>
    <td></td>
  </tr>
  <tr>
    <td>changeOrder</td>
    <td><code>() => {field: string, type: OrderType}</code></td>
    <td></td>
  </tr>
<table>

`
OrderType = 'DESC' | 'AESC';
`

### Filter

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>changeFilter</td>
    <td><code>FilterObject => void</code></td>
    <td></td>
  </tr>
  <tr>
    <td>fileds</td>
    <td><pre>Array<{
  key: string,
  type: 'number' | 'string',
  options: Array<{
    key: string,
    title: string
  }>,
  label: string
}>
    </pre></td>
    <td></td>
  </tr>
<table>

`
type FilterObject = {[key: string]: {
  [operator: 'lt' | 'lte' | 'gt' | 'gte' | 'eq']: *
}}
`

### Pagination

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>prevPage</td>
    <td><code>() => void</code></td>
    <td></td>
  </tr>
  <tr>
    <td>nextPage</td>
    <td><code>() => void</code></td>
    <td></td>
  </tr>
   <tr>
    <td>hasNextPage</td>
    <td><code>Boolean</code></td>
    <td></td>
  </tr>
  <tr>
    <td>changeSize</td>
    <td><code>(size: number) => void</code></td>
    <td></td>
  </tr>
   <tr>
    <td>size</td>
    <td><code>number</code></td>
    <td></td>
  </tr>
</table>

