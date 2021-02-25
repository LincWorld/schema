# Untitled object in Channel Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## energy Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-energy.md))

# energy Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                          |
| :-------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [active](#active)     | `integer` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy-properties-active.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy/properties/active")     |
| [reactive](#reactive) | `integer` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy-properties-reactive.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy/properties/reactive") |
| [apparent](#apparent) | `integer` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy-properties-apparent.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy/properties/apparent") |

## active

Active component of energy consumed (mWh)

`active`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy-properties-active.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy/properties/active")

### active Type

`integer`

## reactive

Reactive component of energy consumed (mWh)

`reactive`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy-properties-reactive.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy/properties/reactive")

### reactive Type

`integer`

## apparent

Apparent component of energy consumed (mWh)

`apparent`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-energy-properties-apparent.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/energy/properties/apparent")

### apparent Type

`integer`
