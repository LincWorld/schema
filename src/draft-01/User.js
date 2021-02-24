module.exports = {
	title: "User",
	type: "object",
	properties: {
		entityType: {
			type: "string",
			const: "user"
		},
		id: {
			"type": "string",
			"format": "uuid"
		}
	}
}
