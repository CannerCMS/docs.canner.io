---
title: Canner.io at Graphql Taiwan Meetup Recap
author: William Chang
authorURL: http://twitter.com/wwwy3y3
authorFBID: 100001527041881
---

Yesterday, GraphQL Taiwan meetup hosted by [GraphQL Taiwan](https://www.facebook.com/groups/graphql.tw/) took place in Taipei, Taiwan, around 50 participants attended. As CTO at [Canner](www.canner.io), I'm glad to share what our team Canner's experienced with GraphQL on this meetup.

<!--truncate-->

## Slide
<script async class="speakerdeck-embed" data-id="32ef63f2e3ff417994e6962bf78fd40e" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

[Slide Link]((https://speakerdeck.com/wwwy3y3/how-canner-dot-io-build-graphql-for-cms-1))

## What's in this talk?
At first, I shared about how we see CMS at Canner, and why GraphQL plays a big part in our development stack.

### 1. CMS Background - The reason to use GraphQL
Due to the demands of the displaying content on different devices (website, mobile, tablet, IoT... ) and the rising popularity of frontend framework (such as React, Angular, etc...), more and more developers shifted from traditional CMS to headless CMS.

![cms](https://i.imgur.com/uEQONKg.png)


However, we also noticed that many developers started to use BaaS (Backend-as-a-service) and there are many features overlaped between Headless CMS and BaaS. What Headless CMS can do, BaaS can do even better, such as API, File Storage, Cloud Function, etc...

![firebase](https://i.imgur.com/R9mHLPC.png)

This is why we started a concept - Adaptive CMS. The concept soon became our product - [Canner](www.canner.io).

![adaptive cms](https://i.imgur.com/mwPFPlN.png)

**We believe GraphQL would be a good solution in order to deal with different data sources and data relationship at our framework.**

### 2. Why Canner select Apollo?
![apollo](https://i.imgur.com/DHpYu74.png)
After several days of research on GraphQL, we decided to use [Apollo](https://www.apollographql.com/) for several reasons:

* Great Documentation.
* Great Development Experience : [apollo-client-devtools](https://github.com/apollographql/apollo-client-devtools)
* Great support for React and Typescript.
* Flexibility by using [Apollo-link](https://www.apollographql.com/docs/link/).
* Clear implemetion about Cache machanism in Apollo-client.


### 3. Integrate with Firebase: Apollo-link-firebase
![apollo-link-firebase](https://user-images.githubusercontent.com/26116324/37811194-a316caac-2e93-11e8-858b-eff589dcfdf3.png)
Several months ago, we opensourced [apollo-link-firebase](https://github.com/Canner/apollo-link-firebase).  `apollo-link-firebase` provides you a simple way to query Firebase in graphQL with Apollo-client without building a graphQL server.

Currently, we support features below:

* **Query**: All sorting and filtering methods on document are supported.
* **Mutation**: deal with set, update, remove methods with graphQL mutation.
* **Realtime Subscription**: Listen to your Firebase events using graphQL Subscription.
* **Data Join**: Retrieve your data from different paths using one graphQL.

### 4. Canner with GraphQL
![canner](https://i.imgur.com/1tOLWSL.jpg)
While designing graphQL interface for our CMS framework, I saw prisma just released. **[Prisma](https://www.prisma.io/)** is a performant open-source GraphQL **ORM-like\* layer** doing the heavy lifting in your GraphQL server. They designed a great graphQL interface that we can just use it in our CMS framework.

Hence, our team Canner developed almost the same graphQL interface with Prisma in Typescript and written as an apollo-link. Although we haven't officially opensourced this repo, but it's already on github: [canner-graphql-interface](https://github.com/Canner/canner-graphql-interface).

`canner-graphql-interface` provides a connector interface, so we can simply implement this interface to create connectors to different data sources, which is now support for **Firebase Realtime database, MemoryStore and also Prisma Client**. We'll be sure to support more data sources in the future.

In the last part of the talk, I shared some difficulties when we connect Canner to Prisma. There are some issues about data type transformation between Canner and Prisma.

### Thanks 👏👏
That's all for the recap of my talk. Hope to see you next time.

