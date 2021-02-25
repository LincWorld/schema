# Device Schema

```txt
https://schema.linc.world/draft-01/Device.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Device.json](Device.json "open original schema") |

## Device Type

`object` ([Device](device.md))

# Device Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :---------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [entityType](#entitytype)           | `string` | Optional | cannot be null | [Device](device-properties-entitytype.md "https://schema.linc.world/draft-01/Device.json#/properties/entityType")           |
| [id](#id)                           | `string` | Optional | cannot be null | [Device](device-properties-id.md "https://schema.linc.world/draft-01/Device.json#/properties/id")                           |
| [owner](#owner)                     | `object` | Optional | cannot be null | [Device](device-properties-user.md "https://schema.linc.world/draft-01/User.json#/properties/owner")                        |
| [hardwareVersion](#hardwareversion) | `string` | Optional | cannot be null | [Device](device-properties-hardwareversion.md "https://schema.linc.world/draft-01/Device.json#/properties/hardwareVersion") |
| [data](#data)                       | `object` | Optional | cannot be null | [Device](device-properties-data.md "https://schema.linc.world/draft-01/Device.json#/properties/data")                       |
| [metadata](#metadata)               | `object` | Optional | cannot be null | [Device](device-properties-metadata.md "https://schema.linc.world/draft-01/Device.json#/properties/metadata")               |

## entityType



`entityType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-entitytype.md "https://schema.linc.world/draft-01/Device.json#/properties/entityType")

### entityType Type

`string`

### entityType Constraints

**constant**: the value of this property must be equal to:

```json
"device"
```

## id

Unique Alphanumeric ID of Linc device

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-id.md "https://schema.linc.world/draft-01/Device.json#/properties/id")

### id Type

`string`

## owner



`owner`

*   is optional

*   Type: `object` ([User](device-properties-user.md))

*   cannot be null

*   defined in: [Device](device-properties-user.md "https://schema.linc.world/draft-01/User.json#/properties/owner")

### owner Type

`object` ([User](device-properties-user.md))

## hardwareVersion

Version of Linc Device

`hardwareVersion`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-hardwareversion.md "https://schema.linc.world/draft-01/Device.json#/properties/hardwareVersion")

### hardwareVersion Type

`string`

## data



`data`

*   is optional

*   Type: `object` ([Details](device-properties-data.md))

*   cannot be null

*   defined in: [Device](device-properties-data.md "https://schema.linc.world/draft-01/Device.json#/properties/data")

### data Type

`object` ([Details](device-properties-data.md))

## metadata



`metadata`

*   is optional

*   Type: `object` ([Details](device-properties-metadata.md))

*   cannot be null

*   defined in: [Device](device-properties-metadata.md "https://schema.linc.world/draft-01/Device.json#/properties/metadata")

### metadata Type

`object` ([Details](device-properties-metadata.md))
