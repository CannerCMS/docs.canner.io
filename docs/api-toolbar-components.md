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
    <td>string</td>
    <td>The current sorted field</td>
  </td>
  <tr>
    <td>orderType</td>
    <td>'ASC' | 'DESC'</td>
    <td>ascendancy or descendancy</td>
  </tr>
  <tr>
    <td>options</td>
    <td width="30%">
      <pre>
{
  field: string,
  label: string,
  defaultOrder?: 'ASC' | 'DESC'
}
      </pre>
    </td>
    <td>Every option respresents the field you want to sort by, the label you want to show to user, and the default order type you want to use</td>
  </tr>
  <tr>
    <td>changeOrder</td>
    <td>
      <pre>
() => {
  orderField: string,
  orderType: OrderType
}
      </pre>
    </td>
    <td>The method to change orderField and orderType.</td>
  </tr>
  <tr>
    <td>defaultField</td>
    <td>string</td>
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
    <td><a href="api-types#queryobject">QueryObject</a> => void</td>
    <td>The method to change the current filter.</td>
  </tr>
  <tr>
    <td>deleteFilter</td>
    <td>(filterIndex: numver) => void</td>
    <td>The method to delete the specfic filter.</td>
  </tr>
  <tr>
    <td>displayedFilters</td>
    <td>Array&lt;filterIndex: number></td>
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
    <td>() => void</td>
    <td>The method to go to the previous page.</td>
  </tr>
  <tr>
    <td>nextPage</td>
    <td>() => void</td>
    <td>The method to go to the next page.</td>
  </tr>
  <tr>
    <td>hasNextPage</td>
    <td>boolean</td>
    <td>Whether the next page exists.</td>
  </tr>
  <tr>
    <td>hasPreviousPage</td>
    <td>boolean</td>
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
    <td>number</td>
    <td>Total number of data items.</td>
  </tr>
   <tr>
    <td>current</td>
    <td>number</td>
    <td>The current page.</td>
  </tr>
  <tr>
    <td>changePage</td>
    <td>(page: number) => void</td>
    <td>The method to change page.</td>
  </tr>
</table>

