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
    <td><code>CannerSchema</code></td>
    <td>The JSON object which represents the structure and UI config of the CMS.</td>
  </tr>
  <tr>
    <td>pageSchema</td>
    <td><code>CannerSchema</code></td>
    <td>The JSON object which represents the pages which are contructed with charts and indicators.</td>
  </tr>
  <tr>
    <td>visitors</td>
    <td><code>Array&lt;Object></code></td>
    <td>The vistors which will transform the componentTree.</td>
  </tr>
  <tr>
    <td>connector</td>
    <td><code>Connector | {[key: string]: Connector}</code></td>
    <td>See <a href="guides-connector">Connector Guide</a></td>
  </tr>
  <tr>
    <td>graphqlClient</td>
    <td><code>GraphqlClient | {[key: string]: GraphqlClient}</code></td>
    <td>See <a href="guides-connector">Connector Guide</a></td>
  </tr>
  <tr>
    <td>resolvers</td>
    <td><code>{[key: string]: Resolver}</code></td>
    <td>See <a href="guides-resolver">Resolver Guide</a></td>
  </tr>
  <tr>
    <td>imageStorages</td>
    <td><code>{[key: string]: Storage}</code></td>
    <td>See </td>
  </tr>
  <tr>
    <td>fileStorages</td>
    <td><code>{[key: string]: Storage}</code></td>
    <td>See <a href=""></a></td>
  </tr>
  <tr>
    <td>dict</td>
    <td>
      <code>
        <a href="api-types#intldict">
          IntlDict
        </a>
      </code>
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

## RouterParams

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>operator</td>
    <td><code>'create' | 'update'</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>payload</td>
    <td><code>Object</code></td>
    <td>The default data in create form.</td>
  </tr>
</table>

## IntlObject

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>locale</td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>defaultLocale</td>
    <td><code>string</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>messages</td>
    <td>
      <code>
        <a href="api-types#intldict">
          IntlDict
        </a>
      </code>
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
    <td><code>Array&lt;SubmenuConfig | MenuItemConfig></code></td>
    <td>The configuration of sidebar menu.</td>
  </tr>
  <tr>
    <td>SubmenuConfig</td>
    <td><code>{title: string, items: Array&lt;MenuItemConfig>}</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td>MenuItemConfig</td>
    <td>
      <code>
        {
          title: string,
          pathname: string,
          params?: <a href="#routerparams">RouterParams</a>
        }
      </code>
    </td>
    <td>
      -
    </td>
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
    <td>The <code>async</code> value is <code>true</code> represents that the all queries is done by server, so it cost less network because of that the pagination limits the count of the responsed data. But it also limits the flexibility of query since Canner supports serveral APIs, so we have to define the most general interface. </td>
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
    <td><code>boolean</code></td>
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
    <td><code>{field: string, label: string, defaultOrder?: 'ASC' | 'DESC'}</code></td>
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
    <td>Filter is hidden by default, you can set <code>alwaysDisplay</code> true to let it visible.</td>
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
    <td>Filter is hidden by default, you can set <code>alwaysDisplay</code> true to let it visible.</td>
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
    <td>Array&lt;{text: string, condition: <a href="#queryobject">QueryObject</a>}></td>
    <td>-</td>
  </tr>
  <tr>
    <td>alwaysDisplay</td>
    <td>boolean</td>
    <td>Filter is hidden by default, you can set <code>alwaysDisplay</code> true to let it visible.</td>
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
    <td>Use <code>indexOf</code> method, only supported in <code>sync</code> for now.</td>
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
    <td><code>(file: File, options: {filename: string}, onProgress: (e: {precent: number}) => void)
    => Promise<{link: string}></code></td>
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
    <td><code>() => Array&lt;string></code></td>
    <td>Get the array of paths.</td>
  </tr>
  <tr>
    <td>toString</td>
    <td><code>() => string</code></td>
    <td>Change refId to string.</td>
  </tr>
  <tr>
    <td>child</td>
    <td><code>(keyName: string) => RefId</code></td>
    <td>Append a keyName after the current refId. Return a new RefId instance.</td>
  </tr>
  <tr>
    <td>remove</td>
    <td><code>(count: number) => RefId</code></td>
    <td>Get the ancestor's refId. Return a new RefId instance.</td>
  </tr>
</table>