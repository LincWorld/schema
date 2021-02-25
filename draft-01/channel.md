# Channel Schema

```txt
https://schema.linc.world/draft-01/Channel.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json](Channel.json "open original schema") |

## Channel Type

`object` ([Channel](channel.md))

one (and only one) of

*   [Channel with Current Transformer](channel-oneof-channel-with-current-transformer.md "check type definition")

*   [Channel with Rogowski Coil](channel-oneof-channel-with-rogowski-coil.md "check type definition")

*   [Channel with DC Input](channel-oneof-channel-with-dc-input.md "check type definition")

*   [Channel with Temperature Sensor](channel-oneof-channel-with-temperature-sensor.md "check type definition")

# Channel Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                           |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [entityType](#entitytype) | `string`  | Optional | cannot be null | [Channel](channel-properties-entitytype.md "https://schema.linc.world/draft-01/Channel.json#/properties/entityType") |
| [id](#id)                 | `string`  | Required | cannot be null | [Channel](channel-properties-id.md "https://schema.linc.world/draft-01/Channel.json#/properties/id")                 |
| [device](#device)         | `object`  | Required | cannot be null | [Channel](channel-properties-device.md "https://schema.linc.world/draft-01/Device.json#/properties/device")          |
| [timestamp](#timestamp)   | `integer` | Optional | cannot be null | [Channel](channel-properties-timestamp.md "https://schema.linc.world/draft-01/Channel.json#/properties/timestamp")   |

## entityType



`entityType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Channel](channel-properties-entitytype.md "https://schema.linc.world/draft-01/Channel.json#/properties/entityType")

### entityType Type

`string`

### entityType Constraints

**constant**: the value of this property must be equal to:

```json
"channel"
```

## id

Input channel number on Linc device

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Channel](channel-properties-id.md "https://schema.linc.world/draft-01/Channel.json#/properties/id")

### id Type

`string`

### id Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"1"`  |             |
| `"2"`  |             |
| `"3"`  |             |
| `"4"`  |             |
| `"5"`  |             |
| `"6"`  |             |
| `"7"`  |             |
| `"8"`  |             |
| `"9"`  |             |
| `"10"` |             |
| `"11"` |             |
| `"12"` |             |
| `"13"` |             |
| `"14"` |             |
| `"15"` |             |
| `"16"` |             |

## device



`device`

*   is required

*   Type: `object` ([Device](channel-properties-device.md))

*   cannot be null

*   defined in: [Channel](channel-properties-device.md "https://schema.linc.world/draft-01/Device.json#/properties/device")

### device Type

`object` ([Device](channel-properties-device.md))

## timestamp



`timestamp`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-properties-timestamp.md "https://schema.linc.world/draft-01/Channel.json#/properties/timestamp")

### timestamp Type

`integer`
