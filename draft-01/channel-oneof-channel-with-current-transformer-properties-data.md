# Untitled object in Channel Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## data Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data.md))

# data Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                           |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [phase](#phase)                           | `string` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-phase.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/phase")                            |
| [current](#current)                       | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-current.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/current")                        |
| [power](#power)                           | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-power.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/power")                            |
| [powerFactor](#powerfactor)               | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor")                |
| [energy](#energy)                         | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy")                          |
| [harmonicDistortion](#harmonicdistortion) | `object` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonic-distortion.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicDistortion") |
| [harmonicValues](#harmonicvalues)         | `array`  | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues")          |

## phase



`phase`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-phase.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/phase")

### phase Type

`string`

### phase Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"L1"` |             |
| `"L2"` |             |
| `"L3"` |             |

## current



`current`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-current.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-current.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/current")

### current Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-current.md))

## power



`power`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-power.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-power.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/power")

### power Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-power.md))

## powerFactor



`powerFactor`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor")

### powerFactor Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor.md))

## energy



`energy`

*   is optional

*   Type: `object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-energy.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy")

### energy Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-energy.md))

## harmonicDistortion



`harmonicDistortion`

*   is optional

*   Type: `object` ([Harmonic Distortion](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonic-distortion.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonic-distortion.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicDistortion")

### harmonicDistortion Type

`object` ([Harmonic Distortion](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonic-distortion.md))

## harmonicValues



`harmonicValues`

*   is optional

*   Type: `object[]` ([Harmonic Values](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values.md))

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues")

### harmonicValues Type

`object[]` ([Harmonic Values](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values.md))

### harmonicValues Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
