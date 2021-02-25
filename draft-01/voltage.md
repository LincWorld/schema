# Line Voltages Schema

```txt
https://schema.linc.world/draft-01/Voltage.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Voltage.json](Voltage.json "open original schema") |

## Line Voltages Type

`object` ([Line Voltages](voltage.md))

# Line Voltages Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [entityType](#entitytype) | `string`  | Optional | cannot be null | [Line Voltages](voltage-properties-entitytype.md "https://schema.linc.world/draft-01/Voltage.json#/properties/entityType") |
| [id](#id)                 | `string`  | Optional | cannot be null | [Line Voltages](voltage-properties-id.md "https://schema.linc.world/draft-01/Voltage.json#/properties/id")                 |
| [device](#device)         | `object`  | Required | cannot be null | [Line Voltages](channel-properties-device.md "https://schema.linc.world/draft-01/Device.json#/properties/device")          |
| [timestamp](#timestamp)   | `integer` | Optional | cannot be null | [Line Voltages](voltage-properties-timestamp.md "https://schema.linc.world/draft-01/Voltage.json#/properties/timestamp")   |
| [data](#data)             | `object`  | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data")     |

## entityType



`entityType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-entitytype.md "https://schema.linc.world/draft-01/Voltage.json#/properties/entityType")

### entityType Type

`string`

### entityType Constraints

**constant**: the value of this property must be equal to:

```json
"voltage"
```

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-id.md "https://schema.linc.world/draft-01/Voltage.json#/properties/id")

### id Type

`string`

### id Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"L1"` |             |
| `"L2"` |             |
| `"L3"` |             |

## device



`device`

*   is required

*   Type: `object` ([Device](channel-properties-device.md))

*   cannot be null

*   defined in: [Line Voltages](channel-properties-device.md "https://schema.linc.world/draft-01/Device.json#/properties/device")

### device Type

`object` ([Device](channel-properties-device.md))

## timestamp



`timestamp`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-timestamp.md "https://schema.linc.world/draft-01/Voltage.json#/properties/timestamp")

### timestamp Type

`integer`

## data



`data`

*   is optional

*   Type: `object` ([Line Voltage](voltage-properties-line-voltage.md))

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data")

### data Type

`object` ([Line Voltage](voltage-properties-line-voltage.md))
