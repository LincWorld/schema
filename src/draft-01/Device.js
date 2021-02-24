const enums = require('./ref/enums');
module.exports = {
	title: "Device",
	type: "object",
	properties: {
		entityType: {
			type: "string",
			const: "device"
		},
		id: {
			type: "string",
			description: "Unique Alphanumeric ID of Linc device"
		},
		owner: {
			$ref: "./User.json"
		},
		hardwareVersion: {
			type: "string",
			description: "Version of Linc Device"
		},
		data: {
			type: "object",
			properties: {
				network: {
					type: "object",
					properties: {
						type: {
							type: "string",
							description: "Active network interface",
							enum: [enums.networkTypes.gsm, enums.networkTypes.wifi, enums.networkTypes.ethernet]
						},
						rssi: {
							description: "Received Signal Strength Indicator",
							type: "number",
							"minimum": 0,
							"maximum": 100
						},
						provider: {
							type: "object",
							properties: {
								mnc: {
									type: "integer",
									description: "Mobile Network Code"
								},
								mcc: {
									type: "integer",
									description: "Mobile Country Code"
								}
							}
						}
					}
				}
			}
		},
		metadata: {
			type: "object",
			properties: {
				name: {
					type: "string"
				},
				description: {
					type: "string"
				},
				location: {
					$ref: "https://geojson.org/schema/Feature.json"
				}
			}
		}
	}
}
