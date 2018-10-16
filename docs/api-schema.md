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
    <td>If you are using customized components, enter your package name or the path of your component (<b>Must be either relative path or absolute path</b>). </td>
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

There must be a relation property in relation tag. It is a object containing two keys `type` and `to`, which represents the relation type and relation to which data key in first level data entry.

```
<relation relation={{
  type: 'toOne' | 'toMany',
  to: '<a first level key>'
}}>
```

> [Usage instruction of `<relation/>`](schema-data-type-tags#lt-relation-gt)

#### toOne type

For now, we only support ui `singleSelect` to deal with toOne relationship, which is also the default UI of relation tag. You must assign indicated uiParams to make the component works. Let's look at the example.

**toOne relationship example**
```
<array keyName="posts">
  <relation keyName="author"
    relation={{
      to: 'users',
      type: 'toOne'
    }}
    uiParams: {{
      textCol: 'name', // decide the field to represent the user
      columns: [{ // the columns config of the table which is used to pick relation data.
        title: 'Name',
        dataIndex: 'name'
      }]
    }}
  >
</array>
<array keyName="users" >
  <string keyName="name" >
</array>
```

**Data**

The data of toOne relationship will be a `string`, for examples, the data of the schema will like below:

```
{
  posts: [{
    id: 'postId1',
    author: 'userId1' // this is the relation field, to users's id 'userId1'
  }],
  users: [{
    id: 'userId1',
    name: 'userName1'
  }, {
    id: 'userId2',
    name: 'userName2'
  }]
}
```


#### toMany type

For now, we only support UI `multipleSelect` to deal with the `toMany` relationship. You must give it `uiParams` to make the component works. Let's look at the example.

**toMany relationship example**

```
<array keyName="posts">
  <string keyName="title" >
</array>
<array keyName="users" >
  <relation keyName="posts"
    relation={{
      to: 'posts',
      type: 'toMany'
    }}
    uiParams: {{
      textCol: 'title', // decide field to represent the post
      columns: [{ // the columns config of the table which is used to pick relation data.
        title: 'Title',
        dataIndex: 'title'
      }]
    }}
  >
</array>
```

**Data**
The data of toMany relationship will be a object and the selected key's value will become `true`. For examples, the data of the schema will be like:

```
{
  posts: [{
    id: 'postId1',
    title: 'postTitle1'
  }, {
    id: 'postId2',
    title: 'postTitle2'
  }, {
    id: 'postId3',
    title: 'postTitle3'
  }],
  users: [{
    id: 'userId1',
    posts: { // the relation field
      postId1: true,
      postId2: true
    }
  }, {
    id: 'userId2',
    posts: {  // the relation field
      postId3: true
    }
  }]
}
```

### &lt;object/&gt;

> See complete [Object components list](/component/?selectedKind=Object&selectedStory=Options&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)


## Layout tags

> Learn more basic and concept of [Layout tags](advance-layout.md)

### Common Properties

Here are common properties which are available for every layouts. 

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
    <th>title</th>
    <th>string</th>
    <th><b>false</b></th>
    <th>-</th>
  </tr>
  <tr>
    <th>description</th>
    <th>string</th>
    <th><b>boolean</b></th>
    <th>-</th>
  </tr>
</table>

> [Usage instruction of `<Block/>`](schema-layout-tags#lt-block-gt)

### &lt;Tabs /&gt;

There are no other properties in Tabs, just remember to give titles to its every child.

> [Usage instruction of `<Tabs/>`](schema-layout-tags#lt-tabs-gt)

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
    <th>align</th>
    <th>'top' | 'middle' | 'bottom'</th>
    <th><b>false</b></th>
    <th>The vertical alignment of the flex layout.</th>
  </tr>
  <tr>
    <th>justify</th>
    <th>'start' | 'end' | 'center' | 'space-around' | 'space-between'</th>
    <th><b>false</b></th>
    <th>Horizontal arrangement of the flex layout.</th>
  </tr>
  <tr>
    <th>type</th>
    <th>'flex'</th>
    <th><b>false</b></th>
    <th>Layout mode</th>
  </tr>
  <tr>
    <th>gutter</th>
    <th>number | object</th>
    <th><b>boolean</b></th>
    <th>
      Spacing between grids, could be a number or a object like
      <code>
        { xs: 8, sm: 16, md: 24}
      </code>
    </th>
  </tr>
</table>

> [Usage instruction of `<Row/> and <Col/>`](schema-layout-tags#lt-row-gt-and-lt-col-gt)

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
    <th>offset</th>
    <th>number</th>
    <th><b>false</b></th>
    <th>The number of cells to offset Col from the left.</th>
  </tr>
  <tr>
    <th>order</th>
    <th>number</th>
    <th><b>false</b></th>
    <th>Raster order, used in flex layout mode.</th>
  </tr>
  <tr>
    <th>pull</th>
    <th>number</th>
    <th><b>false</b></th>
    <th>The number of cells that raster is moved to the left.</th>
  </tr>
  <tr>
    <th>push</th>
    <th>number</th>
    <th><b>false</b></th>
    <th>The number of cells that raster is moved to the right.</th>
  </tr>
  <tr>
    <th>span</th>
    <th>number</th>
    <th><b>false</b></th>
    <th>Raster number of cells to occupy, 0 corresponds to <code>display: none</code>.</th>
  </tr>
  <tr>
    <th>xs</th>
    <th>number|object</th>
    <th><b>false</b></th>
    <th><code>< 576px</code> and also default setting, could be a span value or an object containing above props</th>
  </tr>
  <tr>
    <th>sm</th>
    <th>number|object</th>
    <th><b>false</b></th>
    <th><code>≥ 576px</code> could be a span value or an object containing above props</th>
  </tr>
  <tr>
    <th>md</th>
    <th>number|object</th>
    <th><b>false</b></th>
    <th><code>≥ 768px</code> could be a span value or an object containing above props</th>
  </tr>
  <tr>
    <th>lg</th>
    <th>number|object</th>
    <th><b>false</b></th>
    <th><code>≥ 992px</code> could be a span value or an object containing above props</th>
  </tr>
  <tr>
    <th>xl</th>
    <th>number|object</th>
    <th><b>false</b></th>
    <th><code>≥ 1200px</code> could be a span value or an object containing above props</th>
  </tr>
  <tr>
    <th>xxl</th>
    <th>number|object</th>
    <th><b>false</b></th>
    <th><code>≥ 1600px</code> could be a span value or an object containing above props</th>
  </tr>
</table>

> [Usage instruction of `<Row/> and <Col/>`](schema-layout-tags#lt-row-gt-and-lt-col-gt)

### &lt;Condition /&gt;

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <th>match</th>
    <th><code>(value: Object, operator: 'create' | 'update') => boolean </code></th>
    <th><b>false</b></th>
    <th>If it returns true, the children of Condition will show as normal.</th>
  </tr>
  <tr>
    <th>defaultMode</th>
    <th>'hidden' | 'disabled'</th>
    <th><b>false</b></th>
    <th>If match function returns false, then the children field will be. Default <code>disabled</code></th>
  </tr>
</table>

> [Usage instruction of `<Condition/>`](schema-layout-tags#lt-condition-gt)