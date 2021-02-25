# Channel with DC Input Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## 2 Type

`object` ([Channel with DC Input](channel-oneof-channel-with-dc-input.md))

# 2 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :---------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [sensor](#sensor) | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-dc-input-properties-sensor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/sensor") |
| [data](#data)     | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-dc-input-properties-data.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/data")     |

## sensor



`sensor`

*   is optional

*   Type: `object` ([Sensor](channel-oneof-channel-with-dc-input-properties-sensor.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-dc-input-properties-sensor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/sensor")

### sensor Type

`object` ([Sensor](channel-oneof-channel-with-dc-input-properties-sensor.md))

## data



`data`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-dc-input-properties-data.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-dc-input-properties-data.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/2/properties/data")

### data Type

`object` ([Details](channel-oneof-channel-with-dc-input-properties-data.md))
