# Untitled object in Channel Schema

```txt
https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Channel.json*](Channel.json "open original schema") |

## powerFactor Type

`object` ([Details](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor.md))

# powerFactor Properties

| Property                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                  |
| :-------------------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [truePowerFactor](#truepowerfactor)                 | `number` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor-properties-truepowerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor/properties/truePowerFactor")                 |
| [displacementPowerFactor](#displacementpowerfactor) | `number` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor-properties-displacementpowerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor/properties/displacementPowerFactor") |
| [distortionPowerFactor](#distortionpowerfactor)     | `number` | Optional | cannot be null | [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor-properties-distortionpowerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor/properties/distortionPowerFactor")     |

## truePowerFactor

Total of displacement and distortion power factors

`truePowerFactor`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor-properties-truepowerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor/properties/truePowerFactor")

### truePowerFactor Type

`number`

## displacementPowerFactor

Power factor due to phase shift between voltage and current at the fundamental line frequency

`displacementPowerFactor`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor-properties-displacementpowerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor/properties/displacementPowerFactor")

### displacementPowerFactor Type

`number`

## distortionPowerFactor

Power factor due to harmonic distortions in signal

`distortionPowerFactor`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Channel](channel-oneof-channel-with-current-transformer-properties-data-properties-powerfactor-properties-distortionpowerfactor.md "https://schema.linc.world/draft-01/Channel.json#/oneOf/0/properties/data/properties/powerFactor/properties/distortionPowerFactor")

### distortionPowerFactor Type

`number`
