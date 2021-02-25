# Channel with Temperature Sensor Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/3
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## 3 Type

`object` ([Channel with Temperature Sensor](channel-oneof-channel-with-temperature-sensor.md))

# 3 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [sensor](#sensor) | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-temperature-sensor-properties-sensor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/3/properties/sensor") |
| [data](#data)     | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-temperature-sensor-properties-data.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/3/properties/data")     |

## sensor



`sensor`

*   is optional

*   Type: `object` ([Sensor](channel-oneof-channel-with-temperature-sensor-properties-sensor.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-temperature-sensor-properties-sensor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/3/properties/sensor")

### sensor Type

`object` ([Sensor](channel-oneof-channel-with-temperature-sensor-properties-sensor.md))

## data



`data`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-temperature-sensor-properties-data.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-temperature-sensor-properties-data.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/3/properties/data")

### data Type

`object` ([Details](channel-oneof-channel-with-temperature-sensor-properties-data.md))
