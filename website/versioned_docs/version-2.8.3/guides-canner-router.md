---
id: version-2.8.3-guides-canner-router
title: Canner Router
sidebar_label: Canner Router
original_id: guides-canner-router
---

Canner provides two ways(whether using `react-router` or not) to achieve routing in CMS.

## @canner/router

`@canner/router` is the simplest way for you to start!


```jsx
// app.js
import React from 'react';
import ReactDOM from 'react-dom';

// canner packages
import Canner from 'canner';
import Container from '@canner/container';
import Router from '@canner/router';

// your schema
import schema from './schema/canner.schema.js';


class CMSExample extends React.Component {
  router = new Router({
    baseUrl: "/dashboard"
  });

  componentDidMount() {
    // Trigger the Canner to update the UI with the corresponding part of your CMS.
    this.unlisten = this.router.history.listen(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <Container
        schema={schema}
        router={this.router}
        navbarConfig={{
          showSaveButton: true
        }}
        sidebarConfig={{
          menuConfig: true
        }}
      >
        <Canner />
      </Container>
    );
  }
}
```


## @canner/router-history

If you already using [**react-router**](https://reacttraining.com/react-router/) in your projects, you can just pass the history object to `@canner/router-history`. For example:

Your root is using `BrowserRouter`:

```jsx
// app.js

import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'; // react-router
import CMS from './cms.js';
import Home from './home.js';
import About from './about.js';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={CMS} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Using `history` props from `react-router`.

```jsx
// cms.js
import * as React from 'react';
import Canner from 'canner';
import Container from '@canner/container';
import Router from '@canner/router-history';

export default class CMS extends React.Component {
  render () {
    const {history} = this.props;
    const router = new Router({
      baseUrl: '/dashboard',
      history: history
    });
    return (
      <Container
        sidebarConfig={sidebarConfig}
        navbarConfig={navbarConfig}
        router={router}
        schema={schema}
      >
        <Canner  />
      </Container>
    )
  }
}
```