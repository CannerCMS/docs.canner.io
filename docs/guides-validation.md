---
id: guides-validation
title: Validation
sidebar_label: Validation
---

Canner relies on [ajv](https://github.com/epoberezkin/ajv#validation-keywords) for the validation.

You can add a `validation` prop to the data type tags such as `<string/>`, `<object />`, etc. Then it will validate the field before deploying it.

**Example**

```js
export default (
  <root>
    <array keyName="users">
      <string title="User Name" keyName="name" validation={{pattern: '^[a-zA-Z0-9]{4,10}$'}} />
    </array>
  </root>
)
```

![validation with pattern](/docs/assets/guides-validation/pattern.png)

### Customize error message

You can customize the error message by adding the `errorMessage` entry in the `validation` prop. The message will be displayed when the value is invalid with ajv.

**Example**
```js
export default (
  <root>
    <array keyName="users">
      <string keyName="email" title="Email" required validation={{
        format: 'email',
        errorMessage: 'Please enter a valid email address',
      }} />
    </array>
  </root>
)
```

![validation with customize error message](/docs/assets/guides-validation/error-message.png)


### Required Field

Although ajv provides [required](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#required) keyword, we also provide a more intuitive way to set required by adding required prop. Note that it's implementation is same as `Boolean(value)`, so if you want to ensure `object` or `array` is not empty, you should use [required](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#required) or [minItems](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#maxitems--minitems).

**Example**
```js
export default (
  <root>
    <array keyName="users">
      <string title="User Name" keyName="name" required />
    </array>
  </root>
)
```

![validation with required](/docs/assets/guides-validation/required.png)

### Customize Validation

You can customize a validation by adding a `validator` in `validation` object, it's a function recieves the **immutable** value of this field and the `reject` function. When the field is invalid, call reject function to return error message `reject(<your error message>)`.

Here is an example, in our `editor` component, if you want to ensure the field is empty, `required` prop won't work because it's an object which is always truthy. It this case, you should add a `validator` to validate the value yourself.

**Example**

```js
export default (
  <root>
    <object keyName="about">
      <object
        keyName="content"
        ui="editor"
        title="Content"
        validation={
          {
            validator: (content, reject) => {
              content = content.toJS();
              if (!content || content.html.length === 0) {
                return reject('should be required'); // the message will show on field
              }
            }
          }
        }
      />
    </object>
  </root>
)
```
![customize validation](/docs/assets/guides-validation/validator.png)

## References
- [All CMS component tags](api-canner-script.md)
- [ajv validate keywords](https://github.com/epoberezkin/ajv#validation-keywords)