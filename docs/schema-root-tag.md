---
id: schema-root-tag
title: Root Tag
sidebar_label: Root Tag
---

## Introduction

The outermost tag in canner schema. It actually returns an object containing with several information, which is need when compilation.

**Example**
```js
/** @jsx builder */
import builder, {Block} from 'canner-script';
const schema = (
  <root dict={dict} imageStorage={imageStorage} fileStorage={fileStorage}>
    <page keyName="dashboard">
      <component keyName="productsAmount" {...} />
    </page>
    <object keyName="info" resolver={InfoResolver}>
      <Block>
        <string keyName="name" />
      </Block>
    </object>
  </root>
)
console.log(schema)
/**
 * {
 *   schema: {info: {...}},
 *   pageSchema: {dashboard: {...}},
 *   visitors: [{...}], // created by Block
 *   imageStorages: {info: imageStorage},
 *   fileStorages: {info: fileStorage},
 *   dict: dict,
 *   // other internal settings...
 * }
**/
```

Following are the properties supported in `<root/>`

## schema

A JSON object, created by [data type tags](schema-data-type-tags.md).

## pageSchema

A JSON object, created by [page tags](schema-page-tags.md).

## visitors

An array, created by [layout tags](schema-layout-tags.md). Each visitor will change the component tree of CMS

## connector

A [connector](guides-connector.md) map, decides the data source.

## graphqlClient

A [graphqlClient](guides-connector.md#graphql-client) map, decides the data source.

## imageStorages

A [storage](guides-storage.md) map, all image type components will get an imageStorage to upload images.

## fileStorages

A [storage](guides-storage.md) map, all file type components will get an fileStorage to upload files.

## resolvers

A [resolver](guides-resolver.md) map.

## dict

A object records [i18n](guides-internationalization.md) texts.

**examples**
```js
const dict = {
  en: {
    title: 'Title'
  },
  zh: {
    title: '標題'
  }
}
```