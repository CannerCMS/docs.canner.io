---
id: version-3.1.1-schema-root-tag
title: Root Tag
sidebar_label: Root Tag
original_id: schema-root-tag
---

## Introduction

The outermost tag in Canner schema. It actually returns an object containing with several information.

**Example**

```js
import CannerScript, {Block} from 'canner-script';
const schema = (
  <root imageStorage={imageStorage} fileStorage={fileStorage}>
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

## imageStorages

A [storage](guides-storage.md) map, all image type components will get an imageStorage to upload images.
