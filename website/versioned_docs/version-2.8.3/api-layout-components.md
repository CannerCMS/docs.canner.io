---
id: version-2.8.3-api-layout-components
title: Layout Components
sidebar_label: Layout Components
original_id: api-layout-components
---

Here are some properties of layout components. In general, you don't have to know this properties unless you want to [customize your layout component in Canner](guides-customized-layout).


<table>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>description</th>
  </tr>
  <tr>
    <td>keyName</td>
    <td width="30%">
      <code>
        string
      </code>
    </td>
    <td>the key</td>
  </tr>
  <tr>
    <td>refId</td>
    <td>
      <code>
        RefId
      </code>
    </td>
    <td>Every component has its unique RefId. In order to get specific field. See <a href="concept-refid">refId</a> for details</td>
  </tr>
  <tr>
    <td>goTo</td>
    <td>
      <code>
        string => void
      </code>
    </td>
    <td>The method to change route</td>
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
