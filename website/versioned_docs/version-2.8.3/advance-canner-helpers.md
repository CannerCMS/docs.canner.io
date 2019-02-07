---
id: version-2.8.3-advance-canner-helpers
title: canner-helpers
sidebar_label: Canner Helpers
original_id: advance-canner-helpers
---

> `React` version must be >= 16.x version

Install CMS helpers

```js
npm install canner-helpers
```

`canner-helpers` is a utility helper library for **developing your own CMS Components**. It contains useful components for Array and Object to render their children, and export internal methods for dealing with data.

## Item component

Components can simply render their **children** with `<Item/>` component, which is essential in developing customized `object` and `array` CMS components.

```
{
  refId: RefId,
  filter?: ComponentNode => boolean
}
```

> See how `<Item/>` helps building object and array components:
> 1. [object CMS component](advance-customized-component.md#object-type)
> 2. [array CMS component](advance-customized-component.md#array-type)


### Filter children

You can pass the hidden prop to decide whether the child should be rendered or not.

```jsx
import {Item} from 'canner-helpers';

class extends ObjectComponent extends React.Component {
  render() {
    const {uiParams} = this.props;
    const {defaultKey} = uiParams;
    return (
      <div>
        <Item
          uiParams={uiParams}
          filter={child => defaultKey === child.keyName}
        />
      </div>
    );
  }
}
```

## LiteCMS

Use this component to render any portion of your component tree, you can think of it as a **wildcard component**.  You only need this when the key you want to render is not in the children of the component. So it should lookup from the whole `componentTree`.

> You should **NOT** use this component in normal use cases to render your children in `array` and `object`, because this component will traverse the whole `componentTree` to find the component, to which the `refId` refers, hence spending more time as a consequence.


```jsx
import {LiteCMS} from 'canner-helpers';

// assuming the schema is like, `variants` schema is outside of it's component's scope:
// {
//   type: 'object',
//   items: {
//--------------- component start -----------
//     options: {
//       type: 'object',
//       items: {
//         options: {
//           type: 'array',
//           items: {
//             type: 'string',
//           }
//         }
//       }
//     },
//-------------- component end -----------
//     variants: {
//       type: 'array',
//       items: {
//         ...
//       }
//     }
//   }
// }
class VairantsObject extends React.Component {
  handleOptions = () => {
    // ...
    this.props.onChange(...);
  }

  handleTabs = () => {
    // ...
    this.props.onChange(...);
  }

  render() {
    const {renderComponent, items, value} = this.props;
    return (
      <div>
        {/* component deals with the options */}
        <Options onChange={this.handleOptions} value={value.options}/>

        {/* component deals with the variants */}
        <Tabs onChange={this.handleTabs}>
          {value.map((v, i) => (
            <TabPane key={i}>
              <LiteCMS refId={new refId('<path to refId>')}/>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
```

## Buttons

You can use these components to render confirm or cancel button, their default onClick prop is***deploy and reset method***. These buttons are mostly used in a `Modal` component.

> See full list of [propTypes and API document](api-cms-helpers.md#buttons)

***Example***

```jsx
import {Item, ConfirmButton, CancelButton} from 'canner-helpers';

class MyArrayComponent extends React.Component {
  state = {
    openedIndex: 0,
    modalVisible: false
  }

  open = index => {
    this.setState({
      openedIndex: index,
      visible: true
    });
  }

  close = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    const {renderConfirm, refId, value} = this.props;
    const {visible, openedIndex} = this.state;
    return (
      <div>
        {
          value.map((v, i) => <button key={i} onClick={() => this.open(i)}>EDIT</button>)
        }
        <CreateModal visible={visible}>
          <Item refId={refId.child(openedIndex)} />
          <ConfirmButton refId={refId.child(openedIndex)}
            callback={this.close}
          />
          <CancelButton refId={refId.child(openedIndex)}
            callback={this.close}
          />
        </CreateModal>
      </div>
    );
  }
}
```

## Methods

### createEmptyData

Create empty data from Canner schema object.

```js
type createEmptyData = (schemaObject: Object) => *
```

***Example***

```js
import {createEmptyData} from 'canner-helpers';
const test1 = {
  type: 'object',
  items: {
    name: {
      type: 'string'
    }
  }
}

// {name: ''}
createEmptyData(test1));
```