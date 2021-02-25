# Sensor Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/sensor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## sensor Type

`object` ([Sensor](channel-oneof-channel-with-dc-input-properties-sensor.md))

# sensor Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Optional | cannot be null | [Channel](channel-oneof-channel-with-dc-input-properties-sensor-properties-type.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/sensor/properties/type") |

## type

Type of sensor connected to input channel

`type`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-dc-input-properties-sensor-properties-type.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/sensor/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"https://schema.linc.world/en/st/dc"` |             |
