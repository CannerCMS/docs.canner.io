---
id: api-canner-script
title: canner-script
sidebar_label: canner-script
---

## Type tags

> Learn more basic and concept of [Types of CMS component](advance-component-types.md)

### Common Properties

These are some properties you will use it frequently

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
    <td>If you are using customized components, enter your package name or the path of your component.</td>
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

There must be a relation property in relation tag. It is a object containing two key '`type`' and '`to`', which represent the relation type and relation to which key

```
<relation relation={{
  type: 'toOne' | 'toMany',
  to: '<a first level key>'
}}>
```
#### toOne type

For now, we only support ui `singleSelect` to deal with the toOne relation, which is also the default ui of relation tag. You must give it uiParams to make the component works. Let's look at the example.

**toOne relation example**
```
<array keyName="posts">
  <relation keyName="author"
    relation={{
      to: 'users',
      type: 'toOne'
    }}
    uiParams: {{
      textCol: 'name', // decide field to represent the user
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

**the data**
The data of toOne relation will be a id string, for examples, the data of the schema about will be:

```
{
  posts: [{
    id: 'postId1',
    author: 'userId1' // this is the relation field
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

For now, we only support ui `multipleSelect` to deal with the `toMany` relation. You must give it uiParams to make the component works. Let's look at the example.

**toOne relation example**
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

**the data**
The data of toMany relation will be a id map, for examples, the data of the schema about will be:

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
