---
id: concept-hocs
title: High order components
sidebar_label: High order components
---

In order to make the development flow of CMS components more fluid, we put most of the programming logic into serveral High order components (aka. HOCs), these HOCs will wrap components at `prerender` stage, and provides components several essential props such as `onChange` and `value`.

> [Source code](https://github.com/Canner/react-cms-core/tree/master/src/hocs) of supported HOCs

> Notice that the order of these HOCs is sequenced.

## High order components (HOCs)

We'll introduce HOCs from the outtermost to the innermost.

### 1. id HOC

***Update `RefId`***

Each component needs a `RefId` value to refer to its data from source, **id HOC** will add the component's `keyName` and append to `RefId` to allocate the right data to the component.

> More about [RefId](concept-refid.md)

***Pass react context as props***

Get all context values and pass them as props to components.

> See all [CMS core context list](api-cms-core.md#context)

### 2. route HOC

This HOC detects whether a component should render or not with the following three types.

- `RENDER_COMPONENT`: Render the component normally.
- `RENDER_CHILDREN`: Render the children component only.
- `RENDER_NULL`: Render nothing

### 3. cache HOC

In some cases, a component may want to queue and cache all [`action`](concept-action.md)s and apply its own deploy and reset methods, instead of using default methods.  `cache HOC` can store all actions from users and allow components to control themselves.

For examples, when clicking the create button in a table, the UI component will show  a modal for users to create a new record, which contains children component such as input fields, confirm and cancel buttons. Component will expect when user clicks confirm button, it will `create` a new item in table, otherwise, if user click cancel button will remove all changes.  This mechanism rely on `cache HOC`, internally, it will store a copy of original data in its state, and create a new `ActionManager` to store the actions and override some methods from context **(such as fetch, subscribe, deploy, reset functions)** to ensure all the children will get data from state stored in `cache HOC` and mutative actions in the ActionManager.

> Learn more about [Action](concept-action.md)

### 4. query HOC

All CMS component get it's value (data from source) by `query HOC`. 

This simplify the develop flow when developing CMS components. Thanks to `query HOC`, every parent component does not need to know what value their children needs, **this reduce complexity of dependence between each CMS components**.

### 5. request HOC

This HOC provides `onChange` method for components, it will transform the arguments of onChange function to an redux-like `action` with two keys `type` and `payload`. All actions will store in `ActionManager` util the deploy method is triggered.

> Learn more about [Action](concept-action.md)

### 6. deploy HOC

This HOC provides deploy and reset buttons. In most cases, the buttons will be rendered by this HOC.

### 7. title HOC

Each component can have `title` and `description` attributes, this HOC adds the title and description into components.