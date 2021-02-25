# Untitled object in Line Voltages Schema

```txt
https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage
```

Phase to neutral voltage

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Voltage.json*](Voltage.json "open original schema") |

## voltage Type

`object` ([Details](voltage-properties-line-voltage-properties-voltage.md))

# voltage Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :-------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [rms](#rms)                 | `integer` | Required | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-voltage-properties-rms.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage/properties/rms")                 |
| [peak](#peak)               | `integer` | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-voltage-properties-peak.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage/properties/peak")               |
| [crestFactor](#crestfactor) | `number`  | Optional | cannot be null | [Line Voltages](voltage-properties-line-voltage-properties-voltage-properties-crestfactor.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage/properties/crestFactor") |

## rms

Root mean square of voltage (mV)

`rms`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-voltage-properties-rms.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage/properties/rms")

### rms Type

`integer`

### rms Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## peak

Waveform peak of voltage signal (mV)

`peak`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-voltage-properties-peak.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage/properties/peak")

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

*   defined in: [Line Voltages](voltage-properties-line-voltage-properties-voltage-properties-crestfactor.md "https://schema.linc.world/draft-01/Voltage.json#/properties/data/properties/voltage/properties/crestFactor")

### crestFactor Type

`number`
