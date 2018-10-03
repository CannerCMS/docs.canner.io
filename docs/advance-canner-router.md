---
id: advance-canner-router
title: Canner Router
sidebar_label: Canner Router
---

Canner provides two ways to achieve routing in CMS.

## @canner/router-hisotry

If you already use the **react-router**-like router in your projects, you can just pass the history object to `@canner/router-hisotry`. For example:

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
        <Route path="/dashboard/:activeKey" component={CMS} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

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

## @canner/router

Otherwise, the `@canner/router` is a simple way for you to start!


```jsx
// app.js
import * as React from 'react';
import ReactDOM from 'react-dom';
import Canner from 'canner';
import Container from '@canner/container';
import Router from '@canner/router-history';


class App extends React.Component {
  router = new Router({
    baseUrl: "/"
  });

  componentDidMount() {
    // Trigger the Canner to update the UI with the corresponding part of your CMS.
    this.unlisten = this.router.history.listen(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    <Container
      schema={schema}
      router={this.router}
      navbarConfig={{navbarConfig}}
      sidebarConfig={sidebarConfig}
    >
      <Canner />
    </Container>
  }
}
```