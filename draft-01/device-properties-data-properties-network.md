# Untitled object in Device Schema

```txt
https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Device.json*](Device.json "open original schema") |

## network Type

`object` ([Details](device-properties-data-properties-network.md))

# network Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [Device](device-properties-data-properties-network-properties-type.md "https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/type")         |
| [rssi](#rssi)         | `number` | Optional | cannot be null | [Device](device-properties-data-properties-network-properties-rssi.md "https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/rssi")         |
| [provider](#provider) | `object` | Optional | cannot be null | [Device](device-properties-data-properties-network-properties-provider.md "https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/provider") |

## type

Active network interface

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-data-properties-network-properties-type.md "https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                        | Explanation |
| :------------------------------------------- | :---------- |
| `"https://schema.linc.world/en/nt/gsm"`      |             |
| `"https://schema.linc.world/en/nt/wifi"`     |             |
| `"https://schema.linc.world/en/nt/ethernet"` |             |

## rssi

Received Signal Strength Indicator

`rssi`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Device](device-properties-data-properties-network-properties-rssi.md "https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/rssi")

### rssi Type

`number`

### rssi Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

## provider



`provider`

*   is optional

*   Type: `object` ([Details](device-properties-data-properties-network-properties-provider.md))

*   cannot be null

*   defined in: [Device](device-properties-data-properties-network-properties-provider.md "https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/provider")

### provider Type

`object` ([Details](device-properties-data-properties-network-properties-provider.md))
