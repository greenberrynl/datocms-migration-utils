# `@greenberry/datocms-migration-utils`

A collection of utils to help with the development of DatoCMS migration files.

## Installation

```bash
yarn add @greenberry/datocms-migration-utils -D
```

## API

Each field creator method need 3 arguments a working [DatoCMS `SiteClient`](https://github.com/datocms/js-datocms-client), field `options` and the `modelId` you want to attach the field to.

```js
await createFieldMethod(client, options, modelId);
```

### Field Options

#### `createBoolean`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |

#### `createCTA`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |

#### `createDate`

| Key         | Type                                 | Required |
| :---------- | :----------------------------------- | :------- |
| `label`     | String                               | ✅       |
| `apiKey`    | String                               | ✅       |
| `hint`      | String                               | ❌       |
| `localized` | Boolean                              | ❌       |
| `required`  | Boolean                              | ❌       |
| `dateRange` | `{min: 'ISO-8601', max: 'ISO-8601'}` | ❌       |

#### `createEnum`

| Key            | Type     | Required |
| :------------- | :------- | :------- |
| `label`        | String   | ✅       |
| `apiKey`       | String   | ✅       |
| `options`      | [String] | ✅       |
| `defaultValue` | String   | ❌       |
| `hint`         | String   | ❌       |
| `localized`    | Boolean  | ❌       |
| `required`     | Boolean  | ❌       |

#### `createImage`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |

#### `createLink`

| Key         | Type          | Required |
| :---------- | :------------ | :------- |
| `label`     | String        | ✅       |
| `apiKey`    | String        | ✅       |
| `items`     | [ItemType ID] | ✅       |
| `hint`      | String        | ❌       |
| `localized` | Boolean       | ❌       |
| `required`  | Boolean       | ❌       |
| `unique`    | Boolean       | ❌       |

#### `createLinks`

| Key         | Type                           | Required |
| :---------- | :----------------------------- | :------- |
| `label`     | String                         | ✅       |
| `apiKey`    | String                         | ✅       |
| `items`     | [ItemType ID]                  | ✅       |
| `size`      | `{ min: Number, max: Number }` | ❌       |
| `hint`      | String                         | ❌       |
| `localized` | Boolean                        | ❌       |
| `required`  | Boolean                        | ❌       |

#### `createModularContent`

| Key         | Type          | Required |
| :---------- | :------------ | :------- |
| `label`     | String        | ✅       |
| `apiKey`    | String        | ✅       |
| `blockIds`  | [ItemType ID] | ✅       |
| `hint`      | String        | ❌       |
| `localized` | Boolean       | ❌       |
| `required`  | Boolean       | ❌       |

#### `createNumber`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |

#### `createSEO`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |

#### `createSingleLine`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |
| `heading`   | Boolean | ❌       |

#### `createSlug`

| Key          | Type    | Required |
| :----------- | :------ | :------- |
| `label`      | String  | ✅       |
| `apiKey`     | String  | ✅       |
| `titleField` | Field   | ✅       |
| `prefix`     | String  | ❌       |
| `hint`       | String  | ❌       |
| `localized`  | Boolean | ❌       |
| `required`   | Boolean | ❌       |

#### `createTextArea`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |

#### `createWysiwyg`

| Key         | Type    | Required |
| :---------- | :------ | :------- |
| `label`     | String  | ✅       |
| `apiKey`    | String  | ✅       |
| `hint`      | String  | ❌       |
| `localized` | Boolean | ❌       |
| `required`  | Boolean | ❌       |
| `toolbar`   | Array   | ❌       |

#### `updateModularContent`

| Key         | Type          | Required |
| :---------- | :------------ | :------- |
| `label`     | String        | ✅       |
| `apiKey`    | String        | ✅       |
| `localized` | Boolean       | ❌       |
| `hint`      | String        | ❌       |
| `blockIds`  | [ItemType ID] | ✅       |

#### `uploadFile`

| Key | Type | Required |
| :-- | :--- | :------- |
|     |      |          |
