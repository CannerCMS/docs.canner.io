---
id: api-layout-components
title: Layout Components
sidebar_label: Layout Components
---

Here are the the properties of toolbar components. In general, you don't have to know this properties unless you want to [customize your layout componet in Canner](guides-customized-layout).


<table>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>description</th>
  </tr>
  <tr>
    <td>keyName</td>
    <td>string</td>
    <td>the key</td>
  </tr>
  <tr>
    <td>refId</td>
    <td>RefId</td>
    <td>Every component has its unique RefId. In order to get specific field. See <a href="concept-refid">refId</a> for details</td>
  </tr>
  <tr>
    <td>goTo</td>
    <td><code>string => void</code></td>
    <td>the method to change route</td>
  </tr>
  <tr>
    <td>children</td>
    <td>
      <code>
        Array&lt;Object>
      </code>
    </td>
    <td>
      The schema of children.
    </td>
  </tr>
</table>
