const enums = require("./enums");
const harmonicDistortion = require("./harmonicDistortion");
const harmonicValues = require("./harmonicValues");
module.exports = {
	type: "object",
	properties: {
		timestamp: {
			"type": "integer"
		},
		phase: {
			type: "string",
			enum: enums.phases
		},
		current: {
			type: "object",
			properties: {
				rms: {
					type: "integer",
					description: "Root mean square of current (mA)",
					minimum: 0
				},
				peak: {
					type: "integer",
					description: "Waveform peak of current signal (mA)",
					minimum: 0
				},
				crestFactor: {
					type: "number",
					description: "Ratio of waveform peaks in sampling period to RMS value",
					minimum: 0
				}
			}
		},
		power: {
			type: "object",
			properties: {
				active: {
					type: "integer",
					description: "Active component of power (W)"
				},
				reactive: {
					type: "integer",
					description: "Reactive component of power (W)"
				},
				apparent: {
					type: "integer",
					description: "Apparent component of power (W)"
				}
			}
		},
		powerFactor: {
			type: "object",
			properties: {
				truePowerFactor: {
					type: "number",
					description: "Total of displacement and distortion power factors"
				},
				displacementPowerFactor: {
					type: "number",
					description: "Power factor due to phase shift between voltage and current at the fundamental line frequency"
				},
				distortionPowerFactor: {
					type: "number",
					description: "Power factor due to harmonic distortions in signal"
				}
			}
		},
		energy: {
			type: "object",
			properties: {
				active: {
					type: "integer",
					description: "Active component of energy consumed (mWh)"
				},
				reactive: {
					type: "integer",
					description: "Reactive component of energy consumed (mWh)"
				},
				apparent: {
					type: "integer",
					description: "Apparent component of energy consumed (mWh)"
				}
			}
		},
		harmonicDistortion: harmonicDistortion,
		harmonicValues: {
			type: "array",
			items: harmonicValues,
			uniqueItems: true
		}
	}
};
