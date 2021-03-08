const { required } = require('../Channel');
const HarmonicDistortion = require('./harmonicDistortion');
const harmonicValues = require('./harmonicValues');
module.exports = {
	title: "Line Voltage",
	type: "object",
	properties: {
		timestamp: {
			"type": "integer"
		},
		voltage: {
			type: "object",
			description: "Phase to neutral voltage",
			additionalProperties: false,
			properties: {
				rms: {
					type: "integer",
					description: "Root mean square of voltage (mV)",
					minimum: 0
				},
				peak: {
					type: "integer",
					description: "Waveform peak of voltage signal (mV)",
					minimum: 0
				},
				crestFactor: {
					type: "number",
					description: "Ratio of waveform peaks in sampling period to RMS value"
				}
			},
			"required": [
				"rms"
			]
		},
		harmonicDistortion: HarmonicDistortion,
		harmonicValues: {
			type: "array",
			items: harmonicValues,
			uniqueItems: true
		}
	}
};
