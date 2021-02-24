module.exports = {
	title: "Harmonic Distortion",
	type: "object",
	additionalProperties: false,
	properties: {
		totalHarmonicDistortion: {
			type: "number",
			description: "Percentage of all significant harmonic components to the fundamental line frequency"
		},
		totalInterharmonicDistortion: {
			type: "number",
			description: "Percentage of all significant inter-harmonic components to the fundamental line frequency"
		}
	},
}
