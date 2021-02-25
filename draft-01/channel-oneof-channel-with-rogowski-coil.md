# Channel with Rogowski Coil Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## 1 Type

`object` ([Channel with Rogowski Coil](channel-oneof-channel-with-rogowski-coil.md))

# 1 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :---------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [sensor](#sensor) | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-rogowski-coil-properties-sensor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/sensor") |
| [data](#data)     | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-rogowski-coil-properties-data.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data")     |

## sensor



`sensor`

*   is optional

*   Type: `object` ([Sensor](channel-oneof-channel-with-rogowski-coil-properties-sensor.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-rogowski-coil-properties-sensor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/sensor")

### sensor Type

`object` ([Sensor](channel-oneof-channel-with-rogowski-coil-properties-sensor.md))

## data



`data`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-rogowski-coil-properties-data.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-rogowski-coil-properties-data.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data")

### data Type

`object` ([Details](channel-oneof-channel-with-rogowski-coil-properties-data.md))
