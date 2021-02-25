# User Schema

```txt
https://schema.linc.world/draft-01/User.json#/properties/owner
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Device.json*](Device.json "open original schema") |

## owner Type

`object` ([User](device-properties-user.md))

# owner Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                  |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------- |
| [entityType](#entitytype) | `string` | Optional | cannot be null | [User](user-properties-entitytype.md "https://schema.linc.world/draft-01/User.json#/properties/entityType") |
| [id](#id)                 | `string` | Optional | cannot be null | [User](user-properties-id.md "https://schema.linc.world/draft-01/User.json#/properties/id")                 |

## entityType



`entityType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [User](user-properties-entitytype.md "https://schema.linc.world/draft-01/User.json#/properties/entityType")

### entityType Type

`string`

### entityType Constraints

**constant**: the value of this property must be equal to:

```json
"user"
```

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [User](user-properties-id.md "https://schema.linc.world/draft-01/User.json#/properties/id")

### id Type

`string`

### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
