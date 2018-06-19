---
id: advance-cms-test
title: Test CMS components
sidebar_label: Test CMS components
---

> `React` version must be >= 16.x version

When you build your customized CMS components, you probably want to test it!

We provide `canner-simulator` to make testing CMS components simple.

```js
npm install canner-simulator
```

## Basic (`wrap`, `store`)

Import `wrap` and `store` from `canner-simulator`.

- `wrap` is a **high order component** that mocks all the props and methods that will pass from HOCs into the real Canner CMS Component

- `store` is a singleton, so if you call `setValue` all wrapped component(`wrap(component)`) will receive the same value.

Before any tests, you have to call `store.setValue` to initialize the store to ensure that the component can get its values correctly. Remember to wrap your component with the `wrap` high order component.


```js
import {wrap, store} = from 'canner-simulator';

const MyComponent = ({refId, value, onChange}) => <input
  onChange={e => onChange(refId, 'update', e.target.value)}
/>;

// init store
store.setValue({
  input: ''
});

// wrap myComponent
const WrappedComponent = wrap(MyComponent);

// then you can render it!
<WrappedComponent
  keyName="input"
/>

```

## Render Items

By default, if you wrap your component with `wrap()` from `@canner/react-cms-simulator`, your `<Item/>` in array and object components will render **'this is content'** text, this is helpful to test whether `<Item/>` is rendering correctly in array and object components.


> `<Item/>` is a component that renders children component in array and object, see [CMS component helpers](advance-cms-helpers.md#item-component) to learn the basics.

```js
import {wrap, store} = from 'canner-simulator';
import {Item} from 'canner-helpers';

const MyComponent = () => Item;

// init store
store.setValue({
  info: {
    input: ''
  }
});

// wrap my component
const WrappedComponent = wrap(MyComponent);

// `<Item/>` will render `this is content` by default
mount(
  <WrappedComponent keyName="info">
  </WrappedComponent>
);
```

Given a child, it will rendered as `<Item/>`

```xml
<WrappedComponent keyName="info">
  hi i am item
</WrappedComponent>
```

Wrap the component in children so that it can get the internal values such as the `onChange` function, `refId`, etc....

```js
const InputComponent = wrap((({refId, value, onChange}) => <input
  onChange={e => onChange(refId, 'update', e.target.value)}
/>));

mount(
  <WrappedComponent
    keyName="info"
  >
    <InputComponent keyName="input" />
  </WrappedComponent>
);
```

## Render LiteCMS

To mock up a LiteCMS, just pass a component as `liteCMS`.

> `LiteCMS` is a wild card component that could render any portion component in the CMS by the given `refId`, see [CMS component helpers](advance-cms-helpers.md#litecms) to learn more.

```js
import {wrap, store} = from 'canner-simulator';
import {LiteCMS} from 'canner-helpers';

const MyComponent = ({refId, value, onChange}) => <LiteCMS refId={refId.child('test/name')}/>;

// init store
store.setValue({
  info: {
    test: {
      name: '123'
    }
  }
});

// wrap myComponent
const WrappedComponent = wrap(MyComponent);

// will render default liteCMS as `this is content`
mount(
  <WrappedComponent
    keyName="info"
  />
);
```

Wrap the component in children so that it can get the internal values such as `onChange` function, `refId`, etc....

```js
const InputComponent = wrap((({refId, value, onChange}) => <input
  onChange={e => onChange(refId, 'update', e.target.value)}
/>));

mount(
  <WrappedComponent
    keyName="info"
    liteCMS={InputComponent}
  />
);
```

## onChange function

All CMS components have a **required** prop called `onChange`, you can listen `onChange` event, by wrapping with `wrap(component)`.

```js

<WrappedComponent
  keyName="info"
  onChange={onChange}
/>

function onChange(...args) {
  console.log(...args);
  // RefId, 'update', 'test'
}
```
