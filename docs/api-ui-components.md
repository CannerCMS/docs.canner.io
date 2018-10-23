---
id: api-ui-components
title: UI Components
sidebar_label: UI Components
---

Here are the useful properties that a UI component receieves. In general, you don't have to know this properties unless you want to [customize your component in Canner](guides-customized-component).

## Basic

<table>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>description</th>
  </tr>
  <tr>
    <td>keyName</td>
    <td><code>string</code></td>
    <td>the key</td>
  </tr>
  <tr>
    <td>refId</td>
    <td><code>RefId</code></td>
    <td>Every component has its unique <code>refId</code>, in order to get the specific field. See <a href="concept-refid">refId</a> for details</td>
  </tr>
  <tr>
    <td>items</td>
    <td><code>object</code></td>
    <td>The data schema of children.</td>
  </tr>
  <tr>
    <td>relation</td>
    <td><pre><code>{
  to: string,
  relation: 'toMany' | 'toOne'
}</code></pre>
    </td>
    <td>The relation schema of children.</td>
  </tr>
  <tr>
    <td>toolbar</td>
    <td><code><a href="api-types#toolbar">Toolbar</a></code></td>
    <td>The toolbar schema.</td>
  </tr>
  <tr>
    <td>uiParams</td>
    <td><code>object</code></td>
    <td>
      The additional UI parameters.
    </td>
  </tr>
  <tr>
    <td>disabled</td>
    <td><code>boolean</code></td>
    <td>Whether field is disabled</td>
  </tr>
  <tr>
    <td>imageStorage</td>
    <td><code><a href="api-types#storage">Storage</a></code></td>
    <td>Used to upload images, see <a href="guides-storage">Storage</a> to know more.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td width="30%">
      <pre><code>(
  <a href="api-types#refid" />refId</a>,
  'create' | 'update' | 'delete' | 'swap',
  value
) => Promise<*></code></pre>
    </td>
    <td><code>onChange</code> function let you update data from component to CMS data, the first argument is the field's <a href="api-types#refid">refId</a>, second argument is change type, third one is its value</td>
  </tr>
  <tr>
    <td>goTo</td>
    <td><code>string => void</code></td>
    <td>the method to change route</td>
  </tr>
  <tr>
    <td>value</td>
    <td><code>string | number | boolean | array | object</code></td>
    <td>The value of this component.</td>
  </tr>
  <tr>
    <td>rootValue</td>
    <td><code>Object</code></td>
    <td>The root value, it's useful if you want to get other field values.</td>
  </tr>
</table>

## Advanced

<table>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>description</th>
  </tr>
  <tr>
    <td>fetch</td>
    <td width="50%">
      <code>
        (key: string) => Promise&lt;OriginValue>
      </code>
    </td>
    <td>Get the value of the given key.</td>
  </tr>
  <tr>
    <td>subscribe</td>
    <td>
      <pre><code>(
  key: string,
  callback: (data: *) => void
) => Subscription</code></pre>
    </td>
    <td>Subscribe the data of the given key, and then when the data changes, the callback will be executed with the new data.</td>
  </tr>
  <tr>
    <td>deploy</td>
    <td><code>(key: string) => Promise&lt;void></code></td>
    <td>Deploy the changes of the given key.</td>
  </tr>
  <tr>
    <td>reset</td>
    <td><code>(key: string) => Promise&lt;void></code></td>
    <td>Reset the changes of the given key.</td>
  </tr>
</table>
