---
id: version-3.0.0-file-canner-server-js
title: canner.server.js
sidebar_label: canner.server.js
original_id: file-canner-server-js
---

In OSS version(self-hosting), Canner builds the static files of the CMS and run a web server to host the CMS. Besides, Canner also hosts services including GraphQL Service and Authentication Service.

`canner.server.js` is the configuration of these three services of Canner (`CMS Service`, `GraphQL Service` and `Authentication Service`), you can change the data sources, the UIs, also the authentication configuration in `canner.server.js`.

`canner.server.js` exports the four items below.

- [`common`](#common): Configuration like `hostname`, that would be shared between services. For each services, service configuration has higher priority then common configuration. 
- [`cms`](#cms): Configuration for the CMS service, like UI customization or CMS login/logout process.
- [`graphql`](#graphql): Configuration fpr GraphQL service, like DataSource setup or Apollo Context.
- [`auth`](#auth): Configuration for Authentication service, like user accounts or access token expiration time.

## Examples
Each item in `canner.server.js` should be exported as an object.

### Minimum Configuration
Here's the minimum example of `canner.server.js` that serves at `localhost`.

By default, we have `memoryDataSource` built-in, and you can use `memoryDataSource` with the name `memory` like following:

**canner.schema.js**
```js
export default (
  <root>
    <array keyName="posts" dataSource={{name: 'memory'}}>
      {/* ... */}
    </array>
  </root>
)
```

So, in this minimum `canner.server.js`, you don't have to set dataSource (we simply use `memoryDataSource` here).

The only thing you need to set is user accounts.

**canner.server.js**
```js
exports.auth = {
  accounts: [{
    username: 'canner',
    password: 'canner',
  }]
};
```

As a result, you can login to cms with defined user accounts and update data to `memoryDataSource`.

![login](/docs/assets/login-with-canner.png)

## common
### common.hostname `string`
The public hostname of the services, including protocol, host and port, without trailing slash.

It would be shared between CMS Service and Authentication Service.

For example, if you put Canner CMS Server behind proxy and point the domain `www.yourcms.com` to the proxy, `hostname` should be `https://www.yourcms.com`.

> **⚠︎ Notice**
> 
> hostname with trailing slash like `https://www.yourcms.com/` is not allowed.

### common.cookieKeys `string[]`
Keys that's used for signing cookies in CMS service and Authentication Service. For example: `["your-own-cookie-key"]`.

> **☞ Recommend**
> 
> It's recommended you change this keys for security reason.

### common.public `boolean`
Once you set this attribute to `true`, your cms would be public accessible to everyone without any authentication required.

### common.clientId `string`
### common.clientSecret `string`
OpenID Connect `ClientID` & `ClientSecret`. These two argument would be used in authentication service to setup OpenID Connect Client. They will be also be used in CMS Service authentication part.

### common.discoveryUrl `string`
### common.issuerConfig `IssuerConfig`
You can set either `discoveryUrl` or `issuerConfig` to setup OpenID Connect client in CMS Service and GraphQL Service.

**IssuerConfig**
```ts
IssuerConfig {
  issuer?: string;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
  userinfoEndpoint?: string;
  jwksUri?: string;
}
```

## cms
### cms.style.theme `Object`

Currently our CMS components are based on an awesome React UI library called [Antd](https://ant.design/). It supports you change the theme by edit the less variables, and we also implement it in our configuration, by adding the variables in `cms.style.theme`.

- [Antd variable list](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

To set the primary-color `"#07a4b8"`:

**canner.server.js** 
```json
exports.cms = {
  "style": {
    "theme": {
      "primary-color": "#07a4b8"
    }
  }
}
```

### cms.style.sidebarTheme `string`

It can be `'light'` or `'dark'`. The color theme of the sidebar, change this will also change the sidebar menu theme. So you may need to change the [theme variables](https://ant.design/components/layout/#Layout.Sider) of [menu](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less#L346-L362).

### cms.style.sidebarStyle `Object`

The style of sidebar.

### cms.style.sidebarMenuStyle `Object`

The style of sidebar menu.

### cms.style.navbarTheme `string`

It can be `'light'` or `'dark'`. The color theme of the navbar, change this will also change the navbar menu theme. So you may need to change the [theme variables](https://ant.design/components/layout/#Layout.Sider) of [menu](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less#L346-L362).

### cms.style.navbarStyle `Object`

The style of navbar.

### cms.style.navbarMenuStyle `Object`

The style of navbar menu.

### cms.sidebarMenu `Array`

To [customize the content of the sidebar](guides-sidebar) of your CMS.

**sidebarMenu interface**

```js
type menuItem = {
  title?: string,
  pathname?: string,
  href?: string,
  icon?: string
}

type subMenuItem = menuItem & {
  items: Array<menuItem>
}

exports.cms = {
  sidebarMenu: Array<menuItem | subMenuItem>
}
```

### cms.showSaveButton `boolean`

Show the save button at top-right corner or not, default vaue is `true`

### cms.logo `string`

The url of logo at top-left corner.

### cms.i18nMessages `Object`

The messages of [react-intl](https://github.com/yahoo/react-intl/wiki/Components#intl-provider-component). It's an object records the texts in different locales. To make i18n works, you have to edit your schema, see [i18n guide](guides-internationalization).

**examples**
```js
// canner.server.js
exports.cms.i18nMessages = {
  en: {
    'name.title': 'Name',
    'name.description': 'Enter your name'
  },
  zh: {
    'name.title': '名稱',
    'name.description': '請輸入名稱'
  }
}

// any.schema.js
<string
  keyName="name"
  title="${name.title}"
  description="${name.description}"
/>

```

### cms.hostname `string`
The public hostname of the services, including protocol, host and port, without trailing slash.

It would override `common.hostname`.

### cms.graphqlEndpoint `string`
The graphql endpoint for frontend to request the GraphQL queries. Defaults to `/graphql`.

### OpenID Connect Issuer Config
* cms.oidc.discoveryUrl `string`
* cms.oidc.issuer `string`
* cms.oidc.authorizationEndpoint `string`
* cms.oidc.tokenEndpoint `string`
* cms.oidc.userinfoEndpoint `string`
* cms.oidc.jwksUri `string`

You can set either `cms.oidc.discoveryUrl`, or setup other issuer configs if discovery url is not supported on your OpenId Connect service.

Take `Auth0` for example:
#### Setup discoveryUrl
```js
exports.cms = {
  oidc: {
    discoveryUrl: "https://wwwy3y3.auth0.com/.well-known/openid-configuration"
  }
}
```

#### Setup issuer config manually
```js
exports.cms = {
  oidc: {
    issuer: 'https://wwwy3y3.auth0.com/',
    authorizationEndpoint: 'https://wwwy3y3.auth0.com/authorize',
    tokenEndpoint: 'https://wwwy3y3.auth0.com/oauth/token',
    userinfoEndpoint: 'https://wwwy3y3.auth0.com/userinfo',
    jwksUri: 'https://wwwy3y3.auth0.com/.well-known/jwks.json',
  }
}
```

### cms.oidc.clientId `string`
### cms.oidc.clientSecret `string`
OpenID Connect `ClientID` & `ClientSecret`. These two argument would be used in CMS Service authentication part.

They will override `common.clientId` & `common.clientSecret`.

### OpenID Connect Grant
* cms.oidc.usernameClaim `string` (default: `name`)
* cms.oidc.additionalScopes `string[]`

On our CMS, we will show `username` on navbar, which is gotten from `cms.oidc.usernameClaim` attribute of id_token.

If you require additional scope (for example: `profile`) to get the `username`-like attribute, you can setup `cms.oidc.additionalScopes` to require more scopes.

For example, we require `profile` scope to get `display_name` to render on CMS.
```js
exports.cms = {
  oidc: {
    usernameClaim: 'display_name',
    additionalScopes: ['profile']
  }
}
```

### cms.oidc.forceSsoLogout `boolean`
Defaults to `true`. Whether we want to logout from OpenID Connect Service during logout process of CMS.

#### cms.oidc.ssoLogout `Koa.Middleware`
If your OpenID Connect service has its own logout process, you can customize it here.

### Authentication Customization
You might have your own authentication implementation, you can customize these middlewares to fully customize all the authentication process.

#### cms.beforeRenderCms `Koa.Middleware`
A koa middleware responsible for authenticate the user request before rendering CMS.

#### cms.authCallback `Koa.Middleware`
A koa middleware acts as a webhook for authentication services. You can verify requests from your own authentication service and set cookies here.

#### cms.logout `Koa.Middleware`
A koa middleware triggered when logout.


## graphql
### graphql.dataSources `Record<string, DataSource>`
> Checkout [DataSource Section](./data-source-overview) for more comprehensive explanations.

### graphql.context `Context<any> | ContextFunction<any>`
Apollo Context for GraphQL server.

### graphql.readOnlyAccessToken `string`
You can setup a `readOnlyAccessToken` to access your data with GraphQL from clients.

With `readOnlyAccessToken`, the clients cannot mutate any data through GraphQL, they can only use queries.

For example, if you set `readOnlyAccessToken` to `test-access-token`, simply use `readOnlyAccessToken` as bearer token in your requests.
```js
// headers
{
  headers: {
    Authorization: "Bearer test-access-token"
  }
}
```

### graphql.oidc: GraphqlOIDC
```
GraphqlOIDC {
  discoveryUrl?: string,
  issuerConfig?: IssuerConfig,
}

IssuerConfig {
  issuer?: string;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
  userinfoEndpoint?: string;
  jwksUri?: string;
}
```

You can set either `discoveryUrl` or `issuerConfig` to setup OpenID Connect client in GraphQL Service.

These two config will override `common.discoveryUrl` and `common.issuerConfig`.


## auth
### auth.accounts `Array<{username: string, password: string}>`
The accounts you use to login CMS.

```js
exports.auth = {
  accounts: [{
    username: 'canner',
    password: 'canner',
  }]
};
```
