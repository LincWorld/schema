module.exports = {
	title: "Harmonic Values",
	type: "object",
	additionalProperties: false,
	properties: {
		bin: {
			type: "integer",
			description: "Frequency bins of harmonic and inter-harmonic subgroups"
		},
		value: {
			type: "number",
			description: "Percent component of signal in frequency bin"
		}
	},
}
