---
id: version-2.8.3-api-canner
title: Canner
sidebar_label: Canner
original_id: api-canner
---

## Properties

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>schema</td>
    <td>
      <code>
        <a href="api-types#loadedschema">LoadedSchema</a>
      </code>
    </td>
    <td>
      <b>canner-schema-loader</b> will compile your schema (<b>canner-script</b>) into a JSON object.
    </td>
  </tr>
  <tr>
    <td>dataDidChange</td>
    <td>
      <code>
        <a href="api-types#changeddata">ChangedData</a> => void
      </code>
    </td>
    <td>
      The callback when data change. It is unavailable if you are using <a href="guides-container">container</a>.
    </td>
  </tr>
  <tr>
    <td>afterDeploy</td>
    <td>
      <code>
        void => void
      </code>
    </td>
    <td>
      Callback for successful deployment.
    </td>
  </tr>
  <tr>
    <td>baseUrl</td>
    <td>
      <code>
        string
      </code>
    </td>
    <td>
      The base URL before cms routes.
    </td>
  </tr>
  <tr>
    <td>goTo</td>
    <td>
      <pre><code>(
  {
    pathname: string
  } &
  <a href="api-types#routerparams">RouterParams</a>
) => void</code></pre>
    </td>
    <td>Change the current location to a pathname.</td>
  </tr>
  <tr>
    <td>routes</td>
    <td>
      <code>
        Array&lt;string>
      </code>
    </td>
    <td>Update the current query and refetch data.</td>
  </tr>
  <tr>
    <td>routerParams</td>
    <td>
      <code>
        <a href="api-types#routerparams">RouterParams</a>
      </code>
    </td>
    <td>The parameters in URL.</td>
  </tr>
  <tr>
    <td>intl</td>
    <td>
      <code>
        <a href="api-types#intlobject">IntlObject</a>
      </code>
    </td>
    <td>The internationalization configuration.</td>
  </tr>
  <tr>
    <td>hideButtons</td>
    <td>
      <code>
        boolean
      </code>
    </td>
    <td>Default <code>true</code>, set <code>false</code> to hide the confirm and reset buttons at the bottom of the page</td>
  </tr>
  <tr>
    <td>errorHandler</td>
    <td>
      <code>
        Error => any
      </code>
    </td>
    <td>-</td>
  </tr>
</table>
