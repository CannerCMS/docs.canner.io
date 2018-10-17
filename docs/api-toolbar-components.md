---
id: api-toolbar-components
title: Toolbar Components
sidebar_label: Toolbar Components
---


Here are the the properties of toolbar components. In general, you don't have to know this properties unless you want to [customize your toolbar componet in Canner](guides-customized-toolbar).

## Sorter Component

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>orderField</td>
    <td><code>string</code></td>
    <td>The current sorted field</td>
  </td>
  <tr>
    <td>orderType</td>
    <td><code>'ASC' | 'DESC'</code></td>
    <td>ascendancy or descendancy</td>
  </tr>
  <tr>
    <td>options</td>
    <td><code>{field: string, label: string, defaultOrder?: 'ASC' | 'DESC'}</code></td>
    <td>Every option respresents the field you want to sort by, the label you want to show to user, and the default order type you want to use</td>
  </tr>
  <tr>
    <td>changeOrder</td>
    <td><code>() => {orderField: string, orderType: OrderType}</code></td>
    <td>The method to change orderField and orderType.</td>
  </tr>
  <tr>
    <td>defaultField</td>
    <td><code>string</code></td>
    <td>The initial field to be sorted.</td>
  </tr>
<table>

## Filter Component

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>changeFilter</td>
    <td><code><a href="api-types#queryobject">QueryObject</a> => void</code></td>
    <td>The method to change the current filter.</td>
  </tr>
  <tr>
    <td>deleteFilter</td>
    <td><code>(filterIndex: numver) => void</code></td>
    <td>The method to delete the specfic filter.</td>
  </tr>
  <tr>
    <td>displayedFilters</td>
    <td><code>Array&lt;filterIndex: number></code></td>
    <td>The indexs of visiable filters</td>
  </tr>
  <tr>
    <td>fileds</td>
    <td>Array&lt;<a href="api-types#textfilter">TextFilterConfig</a> | 
        <a href="api-types#numberfilter">NumberFilterConfig</a> | 
        <a href="api-types#selectfilter">SelectFilterConfig</a>></td>
    <td></td>
  </tr>
  <tr>
    <td>where</td>
    <td><a href="api-types#queryobject">QueryObject</a></td>
    <td>The current filter condition.</td>
  </tr>
<table>

## Pagination Component

### Async

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>prevPage</td>
    <td><code>() => void</code></td>
    <td>The method to go to the previous page.</td>
  </tr>
  <tr>
    <td>nextPage</td>
    <td><code>() => void</code></td>
    <td>The method to go to the next page.</td>
  </tr>
  <tr>
    <td>hasNextPage</td>
    <td><code>boolean</code></td>
    <td>Whether the next page exists.</td>
  </tr>
  <tr>
    <td>hasPreviousPage</td>
    <td><code>boolean</code></td>
    <td>Whether the previous page exists.</td>
  </tr>
</table>


### Sync

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>total</td>
    <td><code>number</code></td>
    <td>Total number of data items.</td>
  </tr>
   <tr>
    <td>current</td>
    <td><code>number</code></td>
    <td>The current page.</td>
  </tr>
  <tr>
    <td>changePage</td>
    <td><code>(page: number) => void</code></td>
    <td>The method to change page.</td>
  </tr>
</table>

