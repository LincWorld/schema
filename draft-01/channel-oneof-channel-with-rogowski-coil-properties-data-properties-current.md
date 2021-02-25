# Untitled object in Channel Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## current Type

`object` ([Details](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current.md))

# current Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                            |
| :-------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [rms](#rms)                 | `integer` | Optional | cannot be null | [Channel](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current-properties-rms.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current/properties/rms")                 |
| [peak](#peak)               | `integer` | Optional | cannot be null | [Channel](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current-properties-peak.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current/properties/peak")               |
| [crestFactor](#crestfactor) | `number`  | Optional | cannot be null | [Channel](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current-properties-crestfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current/properties/crestFactor") |

## rms

Root mean square of current (mA)

`rms`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current-properties-rms.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current/properties/rms")

### rms Type

`integer`

### rms Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## peak

Waveform peak of current signal (mA)

`peak`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current-properties-peak.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current/properties/peak")

### peak Type

`integer`

### peak Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## crestFactor

Ratio of waveform peaks in sampling period to RMS value

`crestFactor`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-rogowski-coil-properties-data-properties-current-properties-crestfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/1/properties/data/properties/current/properties/crestFactor")

### crestFactor Type

`number`

### crestFactor Constraints

**minimum**: the value of this number must greater than or equal to: `0`
