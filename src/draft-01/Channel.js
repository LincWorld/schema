const enums = require('./ref/enums');
const electricData = require('./ref/electricData');
module.exports = {
	title: "Channel",
	type: "object",
	properties: {
		entityType: {
			type: "string",
			const: "channel"
		},
		id: {
			type: "string",
			enum: Array.from(Array(16), (_, x) => (x + 1).toString()),
			description: "Input channel number on Linc device"
		},
		device: {
			$ref: "./Device.json"
		},
		timestamp: {
			"type": "integer"
		}
	},
	oneOf: [
		{
			title: "Channel with Current Transformer",
			type: "object",
			properties: {
				sensor: {
					title: "Sensor",
					type: "object",
					properties: {
						type: {
							type: "string",
							description: "Type of sensor connected to input channel",
							enum: [enums.sensorsTypes.ac.ct]
						},
						model: {
							type: "string",
							description: "Model of sensor",
							enum: [].concat(enums.sensorModels.ac.ct)
						}
					}
				},
				data: electricData
			}
		}, {
			title: "Channel with Rogowski Coil",
			type: "object",
			properties: {
				sensor: {
					title: "Sensor",
					type: "object",
					properties: {
						type: {
							type: "string",
							description: "Type of sensor connected to input channel",
							enum: [enums.sensorsTypes.ac.rc]
						},
						model: {
							type: "string",
							description: "Model of sensor",
							enum: [].concat(enums.sensorModels.ac.rc)
						}
					}
				},
				data: electricData
			}
		}, {
			title: "Channel with DC Input",
			type: "object",
			properties: {
				sensor: {
					title: "Sensor",
					type: "object",
					properties: {
						type: {
							type: "string",
							description: "Type of sensor connected to input channel",
							enum: [enums.sensorsTypes.dc]
						}
					}
				},
				data: {
					type: "object", properties: {}
				}
			}
		}, {
			title: "Channel with Temperature Sensor",
			type: "object",
			properties: {
				sensor: {
					title: "Sensor",
					type: "object",
					properties: {
						type: {
							type: "string",
							description: "Type of sensor connected to input channel",
							enum: [enums.sensorsTypes.temperature]
						},
						model: {
							type: "string",
							description: "Model of sensor",
							enum: [].concat(enums.sensorModels.temperature)
						}
					}
				},
				data: {
					type: "object", properties: {}
				}
			}
		}
	]
}
