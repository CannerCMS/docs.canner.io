---
id: api-schema
title: Schema
sidebar_label: Schema
---

## Type tags

> Learn more basic and concept of [Types of CMS component](advance-component-types.md)

### Common Properties

These are some properties you will use frequently.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>keyName</td>
    <td>string</td>
    <td><b>true</b></td>
    <td>Corresponding data key from source.</td>
  </tr>
  <tr>
    <td>ui</td>
    <td>string</td>
    <td><b>false</b></td>
    <td>Choose CMS component to display this data. </td>
  </tr>
  <tr>
    <td>packageName</td>
    <td>string</td>
    <td><b>false</b></td>
    <td>If you are using customized components, enter your package name or the path of your component. <b>Must be eithor relative path or absolute path</b></td>
  </tr>
  <tr>
    <td>uiParams</td>
    <td>Object</td>
    <td><b>false</b></td>
    <td>Additional UI parameters for components. </td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td><b>false</b></td>
    <td>The label of the field.</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td><b>false</b></td>
    <td>The description of the field.</td>
  </tr>
</table>

### &lt;array/&gt;

> See complete [Array components list](/component/?selectedKind=Array&selectedStory=Gallery&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;string/&gt;

> See complete [String components list](/component/?selectedKind=String&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;boolean/&gt;

> See complete [Boolean components list](/component/?selectedKind=Boolean&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;number/&gt;

> See complete [Number components list](/component/?selectedKind=Number&selectedStory=Input&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;date/&gt;

> See complete [Date components list](/component/?selectedKind=Date&selectedStory=Date&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;geoPoint/&gt;

> See complete [GeoPoint components list](/component/?selectedKind=GeoPoint&selectedStory=Map&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;file/&gt;

> See complete [File components list](/component/?selectedKind=File&selectedStory=Image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

### &lt;relation/&gt;

> See complete [Relation components list](/component/?selectedKind=Relation&selectedStory=SingleSelect&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


### &lt;object/&gt;

> See complete [Object components list](/component/?selectedKind=Object&selectedStory=Options&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


## Layout tags

> Learn more basic and concept of [Layout tags](advance-layout.md)

### Common Properties

Here are common properties which are available for every layout. 

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>keyName</td>
    <td>string</td>
    <td><b>false</b></td>
    <td>If it's necessary, parent component will use keyName to decide render which children. </td>
  </tr>
  <tr>
    <td>style</td>
    <td>Object</td>
    <td><b>false</b></td>
    <td>
      The style of layout, See
      <a href="https://reactjs.org/docs/dom-elements.html#style">
        React inline style
      </a>.
    </td>
  </tr>
</table>

### &lt;Block /&gt;

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td><b>false</b></td>
    <td>-</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td><b>boolean</b></td>
    <td>-</td>
  </tr>
</table>

### &lt;Tabs /&gt;

There is no other properties in Tabs, just remember to give titles to its every child.

### &lt;Row /&gt;

> See [antd grid](https://ant.design/components/grid/) to know more detail.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>align</td>
    <td>'top' | 'middle' | 'bottom'</td>
    <td><b>false</b></td>
    <td>The vertical alignment of the flex layout.</td>
  </tr>
  <tr>
    <td>justify</td>
    <td>'start' | 'end' | 'center' | 'space-around' | 'space-between'</td>
    <td><b>false</b></td>
    <td>Horizontal arrangement of the flex layout.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>'flex'</td>
    <td><b>false</b></td>
    <td>Layout mode</td>
  </tr>
  <tr>
    <td>gutter</td>
    <td>number | object</td>
    <td><b>boolean</b></td>
    <td>
      Spacing between grids, could be a number or a object like
      <code>
        { xs: 8, sm: 16, md: 24}
      </code>
    </td>
  </tr>
</table>

### &lt;Col /&gt;

> See [antd grid](https://ant.design/components/grid/) to know more detail.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>offset</td>
    <td>number</td>
    <td><b>false</b></td>
    <td>The number of cells to offset Col from the left.</td>
  </tr>
  <tr>
    <td>order</td>
    <td>number</td>
    <td><b>false</b></td>
    <td>Raster order, used in flex layout mode.</td>
  </tr>
  <tr>
    <td>pull</td>
    <td>number</td>
    <td><b>false</b></td>
    <td>The number of cells that raster is moved to the left.</td>
  </tr>
  <tr>
    <td>push</td>
    <td>number</td>
    <td><b>false</b></td>
    <td>The number of cells that raster is moved to the right.</td>
  </tr>
  <tr>
    <td>span</td>
    <td>number</td>
    <td><b>false</b></td>
    <td>Raster number of cells to occupy, 0 corresponds to <code>display: none</code>.</td>
  </tr>
  <tr>
    <td>xs</td>
    <td>number|object</td>
    <td><b>false</b></td>
    <td><code>< 576px</code> and also default setting, could be a span value or an object containing above props</td>
  </tr>
  <tr>
    <td>sm</td>
    <td>number|object</td>
    <td><b>false</b></td>
    <td><code>≥ 576px</code> could be a span value or an object containing above props</td>
  </tr>
  <tr>
    <td>md</td>
    <td>number|object</td>
    <td><b>false</b></td>
    <td><code>≥ 768px</code> could be a span value or an object containing above props</td>
  </tr>
  <tr>
    <td>lg</td>
    <td>number|object</td>
    <td><b>false</b></td>
    <td><code>≥ 992px</code> could be a span value or an object containing above props</td>
  </tr>
  <tr>
    <td>xl</td>
    <td>number|object</td>
    <td><b>false</b></td>
    <td><code>≥ 1200px</code> could be a span value or an object containing above props</td>
  </tr>
  <tr>
    <td>xxl</td>
    <td>number|object</td>
    <td><b>false</b></td>
    <td><code>≥ 1600px</code> could be a span value or an object containing above props</td>
  </tr>
</table>

### &lt;Condition /&gt;

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>match</td>
    <td>
      <pre>
(
  value: Object,
  operator: 'create' | 'update'
) => boolean
      </pre>
    </td>
    <td><b>false</b></td>
    <td>If it returns true, the children of Condition will show as normal.</td>
  </tr>
  <tr>
    <td>defaultMode</td>
    <td>'hidden' | 'disabled'</td>
    <td><b>false</b></td>
    <td>If match function returns false, then the children field will be. Default <code>disabled</code></td>
  </tr>
</table>
