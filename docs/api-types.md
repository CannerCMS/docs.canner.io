---
id: api-types
title: Types
sidebar_label: Types
---

## LoadedSchema

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>schema</td>
    <td>CannerSchema</td>
    <td>The JSON object which represents the structure and UI config of the CMS.</td>
  </tr>
  <tr>
    <td>pageSchema</td>
    <td>CannerSchema</td>
    <td>The JSON object which represents the pages which are contructed with charts and indicators.</td>
  </tr>
  <tr>
    <td>visitors</td>
    <td>Array&lt;Object></td>
    <td>The vistors which will transform the componentTree.</td>
  </tr>
  <tr>
    <td>connector</td>
    <td>
      <pre>
Connector | {
  [key: string]: Connector
}</pre>
    </td>
    <td>See <a href="guides-connector">Connector Guide</a></td>
  </tr>
  <tr>
    <td>graphqlClient</td>
    <td>
      <pre>
GraphqlClient | {
  [key: string]: GraphqlClient
}</pre>
      </td>
    <td>See <a href="guides-connector">Connector Guide</a></td>
  </tr>
  <tr>
    <td>resolvers</td>
    <td>{[key: string]: Resolver}</td>
    <td>See <a href="guides-resolver">Resolver Guide</a></td>
  </tr>
  <tr>
    <td>imageStorages</td>
    <td>{[key: string]: Storage}</td>
    <td>See <a href="#storage">Storage</a></td>
  </tr>
  <tr>
    <td>fileStorages</td>
    <td>{[key: string]: Storage}</td>
    <td>See <a href="#storage">Storage</a></td>
  </tr>
  <tr>
    <td>dict</td>
    <td>
      <a href="api-types#intldict">
        IntlDict
      </a>
    </td>
    <td>The dictionary which records the texts in different locales</td>
  </tr>
</table>

## ChangedData

```js
{
  [key: string]: boolean | {[id: string]: any}
}
```


## IntlObject

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>locale</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>defaultLocale</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>messages</td>
    <td>
      <a href="api-types#intldict">
        IntlDict
      </a>
    </td>
    <td>The dictionay which records the texts in different locales.</td>
  </tr>
</table>

## IntlDict

```js
{
  [locale: string]: {
    [textId: string]: string
  }
}
```

## MenuConfig
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</>
  </tr>
  <tr>
    <td>MenuConfig</td>
    <td>Array&lt;SubmenuConfig | MenuItemConfig></td>
    <td>The configuration of sidebar menu.</td>
  </tr>
  <tr>
    <td>SubmenuConfig</td>
    <td>
      <pre>
{
  title: string,
  items: Array&lt;MenuItemConfig>
}</pre>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>MenuItemConfig</td>
    <td>
      <pre>
{
  title: string,
  pathname: string,
  params?: <a href="#routerparams">RouterParams</a>
}</pre>
    </td>
    <td>
      -
    </td>
  </tr>
</table>

## NavbarConfig
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</>
  </tr>
  <tr>
    <td>logo</td>
    <td width="40%">string | React.Node</td>
    <td>-</td>
  </tr>
  <tr>
    <td>renderMenu</td>
    <td>() => React.Node</td>
    <td>The method to render your customized menu, recommand you to use < href="https://ant.design/components/menu/">antd menu</a></td>
  </tr>
  <tr>
    <td>showSaveButton</td>
    <td>
      boolean
    </td>
    <td>
      Show a save button at the top-right corner.
    </td>
  </tr>
</table>

## Router

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</>
  </tr>
  <tr>
    <td>getRoutes</td>
    <td>() => Array&lt;string></td>
    <td>Get current routes.</td>
  </tr>
  <tr>
    <td>getOperator</td>
    <td>() => 'create' | 'update'</td>
    <td>-</td>
  </tr>
  <tr>
    <td>getPayload</td>
    <td>() => Object</td>
    <td>-</td>
  </tr>
  <tr>
    <td>goTo</td>
    <td>() => ({pathname: string} & <a href="#routerparams">RouterParams</a>)</td>
    <td></td>
  </tr>
</table>


## RouterParams

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>operator</td>
    <td>'create' | 'update'</td>
    <td>-</td>
  </tr>
  <tr>
    <td>payload</td>
    <td>Object</td>
    <td>The default data in create form.</td>
  </tr>
</table>

## Toolbar

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>async</td>
    <td>boolean</td>
    <td>The async value is true represents that the all queries is done by server, so it cost less network because of that the pagination limits the count of the responsed data. But it also limits the flexibility of query since Canner supports serveral APIs, so we have to define the most general interface. </td>
  </tr>
  <tr>
    <td>sorter</td>
    <td><a href="#sorter">Sorter</a></td>
    <td>The sorter schema.</td>
  </tr>
  <tr>
    <td>filter</td>
    <td><a href="#filter">filter</a></td>
    <td>The filter schema.</td>
  </tr>
  <tr>
    <td>pagination</td>
    <td>boolean</td>
    <td>Use pagination or not.</td>
  </tr>
  <tr>
    <td>actions</td>
    <td><a href="#actions">Actions</a></td>
    <td>The actions schema.</td>
  </tr>
</table>

### Sorter

The default sorter is showed as a select component, so it has the `options` property.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>defaultField</td>
    <td>string</td>
    <td>Thie initial sorted field.</td>
  </tr>
  <tr>
    <td>options</td>
    <td>
      <pre>
{
  field: string,
  label: string,
  defaultOrder?: 'ASC' | 'DESC'
}</pre>
    </td>
    <td>Every option respresents the field you want to sort by, the label you want to show to user, and the default order type you want to use.</td>
  </tr>
</table>

### Filter
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>filters</td>
    <td>
      Array&lt;<a href="#textfilter">TextFilterConfig</a> | 
        <a href="#numberfilter">NumberFilterConfig</a> | 
        <a href="#selectfilter">SelectFilterConfig</a>>
    </td>
    <td>
      The configuration of your filters. Canner provides serveral filters, each of them may has its different configuration.
    </td>
  </tr>
  <tr>
    <td>permanentFilter</td>
    <td>
      <a href="#queryobject">QueryObject</a>
    </td>
    <td>
      The permanent filter condition which can't be changed.
    </td>
  </tr>
</table>

#### TextFilter

[TextFilter](schema-toolbar-tags#lt-textfilter-gt) has different query comparisons:
- async: using [eq](#queryobjecteq)
- sync: using [contains](#queryobjectcontains)

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>field</td>
    <td>string</td>
    <td>The field you want to filter</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>alwaysDisplay</td>
    <td>boolean</td>
    <td>Filter is hidden by default, you can set alwaysDisplay true to let it visible.</td>
  </tr>
</table>

#### NumberFilter

[NumberFilter](schema-toolbar-tags#lt-textfilter-gt) let users select the comparison by themseleves such as `>`, `<`, `=`, `≥`, `≤`.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>field</td>
    <td>string</td>
    <td>The field you want to filter</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>alwaysDisplay</td>
    <td>boolean</td>
    <td>Filter is hidden by default, you can set alwaysDisplay true to let it visible.</td>
  </tr>
</table>

#### SelectFilter

[SelectFilter](schema-toolbar-tags#lt-selectfilter-gt) provides a way for users to query with a complex condition containing one or more fields.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>options</td>
    <td>
      <pre>
Array&lt;{
  text: string,
  condition: <a href="#queryobject">QueryObject</a>
}></pre>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>alwaysDisplay</td>
    <td>boolean</td>
    <td>Filter is hidden by default, you can set alwaysDisplay true to let it visible.</td>
  </tr>
  <tr>
    <td>defaultOptionIndex</td>
    <td>number</td>
    <td>You can specify the initial filter with its index of options.</td>
  </tr>
</table>

#### QueryObject

The object represents the filter condition. Composited with `field`, `comparison` and compared values.

```js
{
  [field: string]: {
    [comparison: Comparsion]: *
  }
}
```
#### comparsion
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr id="queryobjecteq">
    <td>eq</td>
    <td>string | number</td>
    <td>equal</td>
  </tr>
  <tr>
    <td id="queryobjectcontains">contains</td>
    <td>string | Array</td>
    <td>Use indexOf method, only supported in sync for now.</td>
  </tr>
  <tr>
    <td>gt</td>
    <td>number</td>
    <td>greater than</td>
  </tr>
  <tr>
    <td>gte</td>
    <td>number</td>
    <td>greater than or equal to</td>
  </tr>
  <tr>
    <td>lt</td>
    <td>number</td>
    <td>less than</td>
  </tr>
  <tr>
    <td>lte</td>
    <td>number</td>
    <td>less than equal to</td>
  </tr>
</table>

## Storage

[source code](https://github.com/Canner/canner/tree/canary/packages/canner-storage/src)

<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>description</td>
  </tr>
  <tr>
    <td>upload</td>
    <td>
      <pre>
(
  file: File,
  options: { filename: string },
  onProgress: (e: { precent: number }) => void
) => Promise<{ link: string }>
      </pre>
    </td>
    <td>upload file.</td>
  </tr>
</table>

## RefId

[source code](https://github.com/Canner/canner/blob/canary/packages/canner-ref-id/src/index.js)

**methods**

<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>description</td>
  </tr>
  <tr>
    <td>getPathArr</td>
    <td>() => Array&lt;string></td>
    <td>Get the array of paths.</td>
  </tr>
  <tr>
    <td>toString</td>
    <td>() => string</td>
    <td>Change refId to string.</td>
  </tr>
  <tr>
    <td>child</td>
    <td>(keyName: string) => RefId</td>
    <td>Append a keyName after the current refId. Return a new RefId instance.</td>
  </tr>
  <tr>
    <td>remove</td>
    <td>(count: number) => RefId</td>
    <td>Get the ancestor's refId. Return a new RefId instance.</td>
  </tr>
</table>