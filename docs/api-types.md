---
id: api-types
title: Types
sidebar_label: Types
---

### LoadedSchema

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

### ChangedData

```js
{
  [key: string]: boolean | {[id: string]: any}
}
```

### RouterParams

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

### IntlObject

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

### IntlDict

```js
{
  [locale: string]: {
    [textId: string]: string
  }
}
```

### MenuConfig
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</>
  </tr>
  <tr>
    <th>MenuConfig</th>
    <th><code>Array&lt;SubmenuConfig | MenuItemConfig></code></th>
    <th>The configuration of sidebar menu.</th>
  </tr>
  <tr>
    <th>SubmenuConfig</th>
    <th><code>{title: string, items: Array&lt;MenuItemConfig>}</code></th>
    <th></th>
  </tr>
  <tr>
    <th>MenuItemConfig</th>
    <th>
      <code>
        {
          title: string,
          pathname: string,
          params?: <a href="#routerparams">RouterParams</a>
        }
      </code>
    </th>
  </tr>
</table>