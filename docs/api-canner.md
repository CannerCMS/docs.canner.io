---
id: api-canner
title: Canner
sidebar_label: Canner
---

## Props

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>schema</td>
    <td>
      <a href="api-types#loadedschema">LoadedSchema</a>
    </td>
    <td>
      The schema which is parsed by canner-schema-loader.
    </td>
  </tr>
  <tr>
    <td>dataDidChange</td>
    <td>
      <code><a href="api-types#changeddata">ChangedData</a> => void</code>
    </td>
    <td>
      The callback when data change.
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
      Callback for listening the successful deployment.
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
      The fixed url before cms routes.
    </td>
  </tr>
  <tr>
    <td>goTo</td>
    <td><code>({pathname: string} & <a href="api-types#routerparams">RouterParams</a>) => void</code></td>
    <td>Change the current location.</td>
  </tr>
  <tr>
    <td>routes</td>
    <td>
      <code>
        Array&lt;string>
      </code>
    </td>
    <td>update the current query and refetch data.</td>
  </tr>
  <tr>
    <td>routerParams</td>
    <td>
      <code>
       <a href="api-types#routerparams">RouterParams</a>
      </code>  
    </td>
    <td>The parameters in url.</td>
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
    <td>boolean</td>
    <td>Default <code>true</code>, set false to hide the confirm and reset buttons at below</td>
  </tr>
  <tr>
    <td>errorHandler</td>
    <td>Error => any</td>
    <td>-</td>
  </tr>
</table>
