# Untitled string in Device Schema

```txt
https://schema.linc.world/draft-01/Device.json#/properties/data/properties/network/properties/type
```

Active network interface

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Device.json*](Device.json "open original schema") |

## type Type

`string`

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                        | Explanation |
| :------------------------------------------- | :---------- |
| `"https://schema.linc.world/en/nt/gsm"`      |             |
| `"https://schema.linc.world/en/nt/wifi"`     |             |
| `"https://schema.linc.world/en/nt/ethernet"` |             |
