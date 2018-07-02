---
id: advance-canner-prisma-type
title: Canner and Prisma datatype comparison
sidebar_label: Canner and Prisma datatype comparison
---

## Prisma Scalars
From Prisma to Canner
### ID Field
``` graphql
type Article {
  id: ID! @unique
}
```
The `id` field will be automatically inserted in all query and mutation, so you don't have to define this field in canner schema.

### String
[See live demo](https://www.canner.io/component?selectedKind=String&selectedStory=Input&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg>  Prisma:
```graphql
type Article {
  text: String!
}
```
<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<string keyName="text" ui="input" />
```

### Integer / Float
[See live demo](https://www.canner.io/component?selectedKind=Number&selectedStory=Input&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
type Article {
  count: Integer!
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<number keyName="number" ui="input"/>
```

### DateTime
[See live demo](https://www.canner.io/component?selectedKind=DateTime&selectedStory=DateTime&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
type Article {
  createdAt: DateTime!
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<dateTime keyName="createdAt" ui="dateTime"/>
```

### Boolean
[See live demo](https://www.canner.io/component?selectedKind=Boolean&selectedStory=Card&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
type Article {
  isPublished: Boolean!
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<boolean
  keyName="isPublished"
  uiParams={{
    yesText: "YES!!",
    noText: "NO!!"
  }}
  ui="card"/>
```

### Enum
[See live demo](https://www.canner.io/component?selectedKind=String&selectedStory=Select&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
enum Role {
   ADMIN,
   EDITOR
}

type Stuff {
  role : Role!
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
> Please use `string` type and assign `select` to `ui`. We'll transfrom `String` to `Enum` on the fly in our graphQL proxy.
``` js
<string
  keyName="role"
  ui="select"
  uiParams={{
    options: [{
      text: 'ADMIN',
      value: "admin (with all power)"
    }, {
      text: 'EDITOR',
      value: "editor (can only edit)"
    }]
  }}/>
```

### Json
The value of Json type is dynamic, so you should define it correspoding to the schema of json.

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
/*
  For example:
  dynamic = {
    nestedProducts: [{
      name: "product name",
      label: ["label", "label2"]
    }]
  }
*/

type Stuff {
  dynamic : Json
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
/*
  For example:
  dynamic = {
    nestedProducts: [{
      name: "product name",
      label: ["label", "label2"]
    }]
  }
*/
<object keyName="dynamic">
  <array keyName="nestedProducts">
    <string keyName="name" />
    <array keyName="label" ui="tag" />
  </array>
</object>
```

## Relationships
### ToOne
<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
type User {
  id: ID! @unique
  name: String! @default(value: "")
}

type Post {
  owner: User!
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<relation keyName="owner"
  relation={{
    to: 'User',
    type: 'toOne'
  }}
  uiParams= {{
    textCol: 'name',
    columns: [{
      title: 'Name',
      dataIndex: 'name'
    }]
  }}
/>
```

### ToMany
<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma:
```graphql
type Post {
  id: ID! @unique
  content: String!
  title: String!
}

type User {
  id: ID! @unique
  name: String! @default(value: "")
  posts: [Post!]! @relation(name: "UserPosts", onDelete: CASCADE)
}
```

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<relation keyName="posts"
  relation={{
    to: 'Post',
    type: 'toMany'
  }}
  uiParams= {{
    textCol: 'title',
    columns: [{
      title: 'title',
      dataIndex: 'title'
    }]
  }}
/>
```

## Canner customized scalars
There are some Customized Scalars we define in our own GraphQL interface.

### Image
For [Image uploader](https://www.canner.io/component?selectedKind=Image&selectedStory=Image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<image keyName="photo" ui="image"/>
```

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma: you can either choose to create another `type` or just use `Json`.
```graphql
type Image {
  contentType: String
  name: String
  size: Number
  url: String
}

type Stuff {
  photo : Image!
  # or Json!
}
```

### GeoPoint
For [GeoPoint locator](https://www.canner.io/component?selectedKind=GeoPoint&selectedStory=Map&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

<img width="32" height="32" src="/img/icon.png" style="float: left; margin: 0px 10px 15px 0px;" /> Canner:
``` js
<geoPoint keyName="location"/>
```

<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 24.38L15.32 1.01A1.766 1.766 0 0 0 13.816.002a1.747 1.747 0 0 0-1.608.834L.272 20.169a1.808 1.808 0 0 0 .021 1.941l5.835 9.038a1.877 1.877 0 0 0 2.108.775l16.936-5.009c.518-.154.943-.52 1.165-1.007a1.816 1.816 0 0 0-.01-1.527zm-2.465 1.002l-14.37 4.25a.602.602 0 0 1-.767-.692l5.133-24.585c.096-.46.732-.533.932-.107l9.505 20.184c.18.38-.025.83-.433.95z" fill="#0C344B"></path></g></g></svg> Prisma: you can either choose to create another `type` or just use `Json`.
```graphql
type GeoPoint {
  placeId: String
  address: String
  lat: Number
  lng: Number
}

type Stuff {
  location: GeoPoint!
  # or Json!
}
```

