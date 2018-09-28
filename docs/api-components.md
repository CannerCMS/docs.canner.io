---
id: api-components
title: CMS UI Components
sidebar_label: CMS UI Components
---

## Basic

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
    <td>Every component has its unique RefId. In order to get specific field. See <a href="concept-refid.html">refId</a> for details</td>
  </tr>
  <tr>
    <td>items</td>
    <td>object</td>
    <td>The items in schema. For example, an object schema:
      <pre><code>{type: 'object', items: {name: {type: 'string'}}}</code></pre>
    </td>
  </tr>
  <tr>
    <td>uiParams</td>
    <td>object</td>
    <td>
      The additional of UI parameters.
    </td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean | {create: boolean, update: boolean, delete: boolean}</td>
    <td>Whether field is disabled</td>
  </tr>
  <tr>
    <td>imageServiceConfig</td>
    <td>ImageServiceConfig</td>
    <td>The configuration for antd upload. See <a href="https://github.com/Canner/image-service-config">@canner/image-service-config</a> for details.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td><code>(refId, changeType, value) => Promise<*></code></td>
    <td><code>onChange</code> function is how you update data from component to CMS data, the first argument is the field's <code>refId</code>, second argument is change type, third is its value</td>
  </tr>
  <tr>
    <td>onDeploy</td>
    <td><code>(callback: (value: any) => any) => void</code></td>
    <td>
      Will execute before Canner deploys all changes to servers, you can do expensive transformation on the value instead of transforming them at every change.
    </td>
  </tr>
  <tr>
    <td>goTo</td>
    <td><code>string => void</code></td>
    <td>the method direct to other page</td>
  </tr>
</table>

## Advanced

<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>description</td>
  </tr>
  <tr>
    <td>query</td>
    <td>
      <code>
        Query
      </code>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>fetch</td>
    <td>
      <code>
        (key: string) => Promise&lt;RootValue>
      </code>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>subscribe</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>request</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>deploy</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>reset</td>
    <td></td>
    <td></td>
  </tr>
</table>
