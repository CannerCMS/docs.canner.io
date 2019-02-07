---
id: version-2.8.3-concept-action
title: Actions in CMS
sidebar_label: Actions in CMS
original_id: concept-action
---

## Introduction

Every action users make in the CMS fields will create a new `Action`, which the Canner CMS uses to mutate internal data storage. It looks like actions in Redux, every action is an object with two fields, `type` and `payload`.

> [Source code](https://github.com/Canner/react-cms-core/tree/master/src/app/actions) of actions in CMS.

**interface**
```js
{
  type: 'CREATE_ARRAY' | 'UPDATE_ARRAY' | 'DELETE_ARRAY' | 'UPDATE_OBJECT' | 'CREATE_AND_CONNECT' | 'CONNECT' | 'DISCONNECT' | 'DISCONNECT_AND_DELETE' | 'NOOP';
  payload: {
    id?: string,
    key?: string,
    path?: string,
    value?: any
  }
}
```

- `key`: First level object's key of the data.
- `id`: If it's a array type data, it will need to have `id` key to indicate which item in the array should be updated or deleted
- `path`: After navigating to the data of selected `key` and `id`, it'll locate the data using this path.
- `value`: New value

## Mutate

The mutate function is just like reducer in Redux. When called with two arguments `originValue` and `action`, it will return a new value.

## ActionManager

To support features in CMS such as **reset changes**, **deploy changes**, we can't directly modify original value that are fetched from server, we have to record the actions internally. We use `ActionManager` to manage actions. For examples, removing the action queue in ActionManager will reset all changes!
