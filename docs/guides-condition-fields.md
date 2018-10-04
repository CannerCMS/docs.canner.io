---
id: guides-condition-fields
title: Condition Fields
sidebar_label: Condition Fields
---

## Introduction

To control a field hidden or disabled in some conditions in runtime, we can use `Condition` layout tag to achieve it. For examples, if you want to show the field `address` only when users choose a certain delivery service, you can use `<Condition />` like below:

```jsx
/** @jsx builder */
// remember to import Condition tag before you use it
import builder, {Condition} from 'canner-script';

export default (
  <object keyName="shipment">
    <string
      keyName="type"
      ui="select"
      uiParams={{
        options: [{
          text: 'Delivery service',
          value: 'DELIVERY_SERVICE'
        }, {
          text: 'Customer picks up ',
          value: 'PICK_UP'
        }]
      }}
    />
    <Condition match={(value, operator) => {
      return value.type === 'DELIVERY_SERVICE';
    }}>
      <string keyName="address" />
    <Condition />
  </object>
);
```

If you prefer to disable it instead of hiding, add `defaultMode` property in `<Condition />`.

```jsx
// ...
  <Condition
    match={(value, operator) => {
      return value.type === 'DELIVERY';
    }}
    defaultMode="disabled"
  >
// ...
```

## Properties

- match: `(value: Object, operator: 'create'| 'update') => boolean`,
- defaultMode: When unmatched, the field should be hidden or disabled.

## Nested Condition


`Condition` layout can be nested, so you can write your schema like this:

```jsx
<object keyName="info">
  <Condition match={(value, operator) => operator === 'create'}>
    <boolean keyName="enabled"/>
    <Condition match={(value) => value.enabled} defaultMode="disabled">
      <string keyName="input" />
    </Condition>
  </Condition>
</object>
```


## Duplicated Keys Problem

In some cases, you may want to use condition fields to pass different properties or children to a tag. But in Canner, this way doesn't work. See the example below. There are two tags with the same `keyName`, receiveTime with different `uiParams`, and they are wrapped in their exclusive condition.

```jsx
<array keyName="orders">
  <string
    keyName="paymentType"
    ui="select"
    uiParams={{
      options: [{
        text: 'Delivery service',
        value: 'DELIVERY_SERVICE'
      }, {
        text: 'Customer picks up ',
        value: 'PICK_UP'
      }]
    }}
  />
  <Condition
    match={value => value.paymentType === 'DELIVERY_SERVICE'}
  >
    <string
      keyName="receiveTime"
      ui="select"
      uiParams={{
        options: [{
          text: '0800~1200',
          value: '8to12'
        }, {
          text: '1300~1600',
          value: '13to16'
        }]
      }}
    >
  </Condition>
  <Condition
    match={value => value.paymentType === 'PICK_UP'}
  >
    <string
      keyName="receiveTime"
      ui="select"
      uiParams={{
        options: [{
          text: '0800~1200',
          value: '8to12'
        }, {
          text: '1300~1600',
          value: '13to16'
        }, {
          text: '1700~2100',
          value: '17to21'
        }]
      }}
    />
  </Condition>
</array>
```

 This schema will throw the error `duplicated key`, because the schema actually generate a JSON object that represents the data structure and two visitors which are used to change the component tree. And the JSON object of the schema above will be the object below which has duplicated keys in `orders.items.items`

```js
// data structure
{
  orders: {
    type: 'array',
    items: {
      type: 'object',
      items: {
        paymentType: {
          // ...
        },
        receiveTime: {
          // ...
          uiParams: {
            options: [{
              text: '0800~1200',
              value: '8to12'
            }, {
              text: '1300~1600',
              value: '13to16'
            }]
          }
        },
        receiveTime: {
          // ...
          uiParams: {
            options: [{
              text: '0800~1200',
              value: '8to12'
            }, {
              text: '1300~1600',
              value: '13to16'
            }, {
              text: '1700~2100',
              value: '17to21'
            }]
          }
        }
      }
    }
  }
}
```


### Alternative Solution

To resolve this problem, we recommend you customizing the component for the `receiveTime` field in the example, here is the code.

**customize-string-receiveTime.js**
```js
import * as React from 'react';
import {get} from 'lodash';
import {Select} from 'antd';

const DELIVERY_OPTIONS = [{
  text: '0800~1200',
  value: '8to12'
}, {
  text: '1300~1600',
  value: '13to16'
}];

const PICK_UP_OPTIONS = [{
  text: '0800~1200',
  value: '8to12'
}, {
  text: '1300~1600',
  value: '13to16'
}, {
  text: '1700~2100',
  value: '17to21'
}];

export default class ReceiveTime extends React.Component {
  handleChange = value => {
    const {onChange} = this.props;
    onChange(this.props.refId, "update", value);
  }

  render() {
    const {rootValue, refId} = this.props;
    const options = get(rootValue, refId.remove().child('paymentType')) === 'DELIVERY_SERVICE' ?
      DELIVERY_OPTIONS :
      PICK_UP_OPTIONS;
    return (
      <Select
        onChange={this.handleChange}
      >
        {
          options.map(option => (
            <Option value={option.value} key={option.value}>
              {option.text}
            </Option>
          ))
        }
      </Select>
    )
  }
}
```

**canner.schema.js**
```js
/** @jsx builder */

import builder from 'canner-script';

module.exports = (
  <root>
    <array keyName="orders">
      <string
        keyName="paymentType"
        ui="select"
        uiParams={{
          options: [{
            text: 'Delivery service',
            value: 'DELIVERY_SERVICE'
          }, {
            text: 'Customer picks up ',
            value: 'PICK_UP'
          }]
        }}
      />
      <string
        keyName="receiveTime"
        packageName="./customize-string-receiveTime"
      >
  </root>
);
```

> Furthor information, see [customized component](guides-customized-component.md)
