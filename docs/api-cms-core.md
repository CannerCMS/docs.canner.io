---
id: api-cms-core
title: canner
sidebar_label: canner
---

## Context

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>fetch</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      get rootData by current query
    </td>
  </tr>
  <tr>
    <td>subscribe</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      subscribe an observable query to detect the data changing
    </td>
  </tr>
  <tr>
    <td>request</td>
    <td>
      <code>
        Function
      </code>
    </td>
    <td>
      update the data store with action
    </td>
  </tr>
  <tr>
    <td>deploy</td>
    <td>
      <code>
        Function
      </code>
    </td>
    <td>
      deploy actions to server
    </td>
  </tr>
  <tr>
    <td>reset</td>
    <td><code>Function</code></td>
    <td>remove those actions which is not deployed</td>
  </tr>
  <tr>
    <td>updateQuery</td>
    <td>
      <code>
        Function
      </code>
    </td>
    <td>update the current query and refetch data.</td>
  </tr>
   <tr>
    <td>refId</td>
    <td>
      <code>
      RefId
      </code>  
    </td>
    <td></td>
  </tr>
   <tr>
    <td>query</td>
    <td>
      <code>Query</code>
    </td>
    <td>current query</td>
  </tr>
</table>

## Props

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>schema</td>
    <td>
      <pre><code>{
  cannerSchema: {[key: string]: any},
  componentTree: {[key: string]: Node}
}</code></pre>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>dataDidChange</td>
    <td>
      <code>
        void => void
      </code>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>children</td>
    <td>
      <code>
        Array<React.Node>
      </code>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>client</td>
    <td>
      <code>
        ApolloClient
      </code>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>baseUrl</td>
    <td>
      <code>
      string
      </code>  
    </td>
    <td></td>
  </tr>
  <tr>
    <td>history</td>
    <td>
      <code>
{
  push: (path: string) => void,
  location: Object
}
      </code>
    </td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
