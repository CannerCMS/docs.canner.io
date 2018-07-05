---
id: why-traditional-headless-adaptive
title: From traditional, headless to adaptive CMS
sidebar_label: Traditional vs Headless vs Adaptive CMS
---

**Amongst disputes about what the next generation CMS is, the general trend recently has been the transition from traditional CMS to headless CMS.** In this post, I'll share a different point of view of what the next generation CMS will look like.
First, Let's look at two major CMS frameworks:

## Traditional CMS v.s. Headless CMS
### Traditional CMS
Traditional CMS, such as Drupal and Wordpress, has a strong community and provides a complete collection of templates of websites that allows users to create beautiful websites with CMS in seconds.

Traditional CMS structure

![overview](/docs/assets/traditionalcms.png)

***Pros:***
1. Abundant CMS website templates.
2. Quick setup for template sites.

***Cons:***
1. No flexibility to construct API structure
2. Don't allow different views (Mobile app, IoT, etc… )

------

### Headless CMS
In the last few years, there have been many different headless CMS surging to the market. The biggest difference between a headless CMS and a traditional CMS is its **flexible API and CMS fields**. Headless CMS's core concept is API-first CMS. There are many headless CMS in the market such as Contentful, GraphCMS, … .

Headless CMS structure

![overview](/docs/assets/headlesscms.png)

***Pros:***
1. API-first, allowing users to build different applications.
2. flexible CMS structure.

***Cons:***
1. Vender lock-in
2. Some use drag and drop CMS features, limit the complexity of apps built.

-----

The main reasons for users consider using headless CMS over traditional CMS, is because:

1. Flexible CMS structure:
Traditional CMS have solid API specifications for each use cases. Headless CMS allows flexible API structure for users to construct their API specifications. In order to achieve it, Some of the headless CMS platforms are like "Wix version" of CMS that you could drag and drop CMS components to design your CMS designs. Some provide CMS configurations to upload your CMS designs.

2. Cross devices:
Because headless CMS is API-based, you create different CMS for each platform, whether it is web, mobile, or even IoT.

#### So, how could a headless CMS be further improved?

1. Decoupled data sources:
Due to wide variety of API-based services and BaaS nowadays. CMS should be able to support both private and public clouds, and even hybrid clouds.

2. Deal with complex data relationships:
Most of headless CMS didn't deal with data relationship problem, this is a huge obstacle for building complex use cases and applications.

3. Reusable CMS templates:
CMS should be reused easily like traditional CMS, allowing users create any constructed CMS templates in one click.

## Introducing Adaptive CMS
**Adaptive CMS** is an improve structure of Headless CMS, and the most flexible CMS structure at present, the core concept of **Adaptive CMS is that CMS should adapt to your workflow and specifications, not the other way around.** What this means is that you could compose your CMS using CMS components and use **specific adapters** to connect to the right data sources (currently BaaS).

Adaptive CMS structure

![overview](/docs/assets/adaptivecms.png)

***Pros:***
1. API first
2. Flexible with CMS components.
3. Allows multi or hybrid sources
4. No vender lock-in

***Cons:***
1. No application templates like traditional CMS.

## Conclusion
I believe the future of CMS should be both spec free and data free, which means users could use the CMS framework that adapts to their applications and from any sources.