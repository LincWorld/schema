const enums = require('./ref/enums');
const LineVoltage = require('./ref/LineVoltage');
module.exports = {
	title: "Line Voltages",
	type: "object",
	properties: {
		entityType: {
			type: "string",
			const: "voltage"
		},
		id: {
			type: "string",
			enum: enums.phases
		},
		device: {
			$ref: "./Device.json"
		},
		data: LineVoltage
	}
};
