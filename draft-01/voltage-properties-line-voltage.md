# Line Voltage Schema

```txt
https://schema.linc.world/draft-01/Voltage.json#/properties/data
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Voltage.json*](Voltage.json "open original schema") |

## data Type

`object` ([Line Voltage](voltage-properties-line-voltage.md))

# data Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [voltage](#voltage)                       | `object` | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-voltage.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage")                        |
| [harmonicDistortion](#harmonicdistortion) | `object` | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-harmonic-distortion.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion") |
| [harmonicValues](#harmonicvalues)         | `array`  | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-harmonicvalues.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicValues")          |

## voltage

Phase to neutral voltage

`voltage`

*   is optional

*   Type: `object` ([Details](voltage-properties-line-voltage-properties-voltage.md))

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-voltage.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage")

### voltage Type

`object` ([Details](voltage-properties-line-voltage-properties-voltage.md))

## harmonicDistortion



`harmonicDistortion`

*   is optional

*   Type: `object` ([Harmonic Distortion](voltage-properties-line-voltage-properties-harmonic-distortion.md))

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-harmonic-distortion.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion")

### harmonicDistortion Type

`object` ([Harmonic Distortion](voltage-properties-line-voltage-properties-harmonic-distortion.md))

## harmonicValues



`harmonicValues`

*   is optional

*   Type: `object[]` ([Harmonic Values](voltage-properties-line-voltage-properties-harmonicvalues-harmonic-values.md))

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-harmonicvalues.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicValues")

### harmonicValues Type

`object[]` ([Harmonic Values](voltage-properties-line-voltage-properties-harmonicvalues-harmonic-values.md))

### harmonicValues Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
