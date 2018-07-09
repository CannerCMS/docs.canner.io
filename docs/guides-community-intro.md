---
id: guides-community-intro
title: Introduction
sidebar_label: Introduction
---

Our team at Canner, Inc. believe in open community, so we open sourced our CMS framework to share our reseach and technology to everyone. Canner is a friendly community and open to any contributors to join and collaborate.

What things do we open source? **We open source all our framework including how we compile, generate UI & data model, Canner parsers, etc..., but not our platform**, which means if you choose to use our open source edition, you have to build your own membership, credential system, role permission, host CMS servers, etc. All by yourself. 

You could use our Canner compiler and [Canner](https://github.com/canner/canner) CMS framework to integrate Canner CMS framework into any applications and products without any fee, which is release under license **Apache license 2.0. Please make sure you follow our license before using our open source edition.**

## CMS open source edition

We open source a simple edition of our CMS using Firebase as database.

- Source: https://github.com/Canner/canner-firebase-cms
- Tutorial: https://www.canner.io/docs/tutorial-community-firebase.html


## Open source projects

- ***[Canner](https://github.com/canner/canner):*** This repository store our core infrastructure of generating our CMS UI and connectors that connect to different databases.

Usage: 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {CMS} from 'canner';

// your schema
import schema from 'path/to/canner.schema.js';

//render it 
ReactDOM.render(
  <Router>
    <Route path="/" render={({history}) => (
      <CMS
        history={history}
        schema={schema}
      />
    )} />
  </Router>
, document.getElementById("root"));
```

- ***[canner-compiler](https://github.com/Canner/canner-compiler)***: This is how Canner compile UI components into `componentTree`, which is how Canner generate it's CMS UI.

- ***[canner-schema-loader](https://github.com/Canner/canner-schema-loader)***: Deconstruct Canner JSX syntax into objects schema object and `componentTree`.

- ***[canner-script](https://github.com/Canner/canner-script)***: `canner-script` is a sugar syntax (JSX) of Canner CMS schema

- ***[canner-helpers](https://github.com/Canner/canner-helpers)***: Helpers utility functions for Canner CMS framework.

- ***[antd-canner-components](https://github.com/Canner/antd-canner-components)***: Ant design based CMS components, which is now our default CMS UI components.

- ***[canner-layouts](https://github.com/Canner/canner-layouts)***: Layout components for Canner CMS.

- ***[canner-simulator](https://github.com/Canner/canner-simulator)***: Testing tool for Canner CMS.

- ***[canner-graphql-interface](https://github.com/Canner/canner-graphql-interface)***: GraphQL resolvers for Canner CMS.