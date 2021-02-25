# Harmonic Values Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Channel.json*](Channel.json "open original schema") |

## items Type

`object` ([Harmonic Values](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values.md))

# items Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                          |
| :-------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [bin](#bin)     | `integer` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values-properties-bin.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues/items/properties/bin")     |
| [value](#value) | `number`  | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values-properties-value.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues/items/properties/value") |

## bin

Frequency bins of harmonic and inter-harmonic subgroups

`bin`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values-properties-bin.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues/items/properties/bin")

### bin Type

`integer`

## value

Percent component of signal in frequency bin

`value`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-harmonicvalues-harmonic-values-properties-value.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/harmonicValues/items/properties/value")

### value Type

`number`
