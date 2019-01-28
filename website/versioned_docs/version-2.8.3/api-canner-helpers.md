---
id: version-2.8.3-api-canner-helpers
title: Canner Helpers
sidebar_label: Canner Helpers
original_id: api-canner-helpers
---

## Components

### Buttons

***Props types***

<table>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>refId</td>
    <td>RefId</td>
    <td><code>this.props.refId</code></td>
    <td>Give a refId to decide the action will deploy or reset which one entryKey.</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>readOnly</td>
  </td>
  <tr>
    <td>style</td>
    <td><code>{[string]: any}</code></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>onClick</td>
    <td><code>(refId: RefId, callback?: Function) => Promise<*></code></td>
    <td>deploy/reset</td>
    <td>-</td>
  </tr>
  <tr>
    <td>callback</td>
    <td><code>Function</code></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>text</td>
    <td><code>React.Node | string</code></td>
    <td>-</td>
    <td>Enter/Cancel</td>
  </tr>
  <tr>
    <td>component</td>
    <td><code>React.ComponentType<*></code></td>
    <td>antd.Button</td>
    <td>-</td>
  </tr>
  <tr>
    <td>filter</td>
    <td><code>Node => boolean</code></td>
    <td>-</td>
    <td>Decide which children will be rendered</td>
  </tr>
</table>