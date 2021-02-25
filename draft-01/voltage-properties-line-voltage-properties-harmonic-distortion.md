# Harmonic Distortion Schema

```txt
https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Voltage.json*](Voltage.json "open original schema") |

## harmonicDistortion Type

`object` ([Harmonic Distortion](voltage-properties-line-voltage-properties-harmonic-distortion.md))

# harmonicDistortion Properties

| Property                                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [totalHarmonicDistortion](#totalharmonicdistortion)           | `number` | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-harmonic-distortion-properties-totalharmonicdistortion.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion/properties/totalHarmonicDistortion")           |
| [totalInterharmonicDistortion](#totalinterharmonicdistortion) | `number` | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-harmonic-distortion-properties-totalinterharmonicdistortion.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion/properties/totalInterharmonicDistortion") |

## totalHarmonicDistortion

Percentage of all significant harmonic components to the fundamental line frequency

`totalHarmonicDistortion`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-harmonic-distortion-properties-totalharmonicdistortion.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion/properties/totalHarmonicDistortion")

### totalHarmonicDistortion Type

`number`

## totalInterharmonicDistortion

Percentage of all significant inter-harmonic components to the fundamental line frequency

`totalInterharmonicDistortion`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-harmonic-distortion-properties-totalinterharmonicdistortion.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/harmonicDistortion/properties/totalInterharmonicDistortion")

### totalInterharmonicDistortion Type

`number`
