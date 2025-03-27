# payload-field-validators

Easy validation handlers for Payload CMS collection's fields

# Usage
## Quick start

Assuming we have a Collection
```ts
export default MyCollection: CollectionConfig = {
  // other fields..
    {
      name: "number_field", 
      type: "number",
    },
    {
      name: "text_field",
      type: "text",
    }
    // other fields..
}
```

We can add a validator to `TextField`:

```ts
  {
  // other configs..
  validate: (value: any) => validateField({
      condition: value.length < 100
  })
}
```

Similarly, we can add a validator to `NumberField`:
```ts
  {
      // other configs..
      validate: (value: any) => validateField({
        condition: value > 100
    })
  }
```

The default message will be `"Invalid input"`

## Advanced

* The default error message could be overridden using the `message` param:
```ts
  {
      // other field's configs..
      name: "percentage_usage",
      validate: (value: any) => validateField({
        condition: value > 20 and value < 50,
        message: "percentage must be between 20 to 50 %"
    })
  }
```

* We can leverage multiple validator to `NumberField` and for each case to show appropriate message:
```ts
{
  name: "grade",
  type: "number",
  required: true,
  validate: (value: any) => validateField([
      {
        condition: value >= 55,
        message: "Grade must be at minimum 55"
      },
      {
        condition: typeof value === "number" && Number.isInteger(value),
        message: "Grade must be an Integer"
      }
  ])
},
```

### Using Validations libraries
You can use form validation libraries like `valibot`/`zod`/`vest` to write more concise conditions

#### Valibot Example
using `valibotCheck` utility
```ts
// import valibot
import * as v from "valibot";

//....
{
  name: "grade",
  type: "number",
  required: true,
  validate: (value: any) => validateField({
      condition: valibotCheck(v.pipe(v.number(), v.integer(), v.minValue(55), value)),
      message: "Grade must be an Integer, minimum 55"
  })
},
```

## Specific use-cases


* Adding Regex validator to `TextField`

```ts
const onlyLettersRegex = /^[a-zA-Z0-9]+$/;
export default MyCollection: CollectionConfig = {
    {
      name: "url",
        type: "text",
      admin: {
      readOnly: false,
        hidden: false
    },
    validate: (value: any) => validateRegex(onlyLettersRegex, value),    // --> add this line
    required: true
}
```

* Adding URL validator to `TextField`

```ts
export default MyCollection: CollectionConfig = {
    {
      name: "url",
      type: "text",
      admin: {
      readOnly: false,
        hidden: false
    },
    validate: (value: any) => validateUrl(value),    // --> add this line
    required: true
}
```

* Adding IP Address validator to `TextField`

```ts
export default MyCollection: CollectionConfig = {
    {
      name: "website_url", 
      type: "text",
      admin: {
      readOnly: false,
        hidden: false
    },
    validate: (value: any) => validateIPAddress(value),    // --> add this line
    required: true
}
```
