module.exports = {
	phases: ["L1", "L2", "L3"],
	networkTypes: {
		gsm: `${process.env.BASE_URL}en/nt/gsm`,
		wifi: `${process.env.BASE_URL}en/nt/wifi`,
		ethernet: `${process.env.BASE_URL}en/nt/ethernet`,
	},
	sensorsTypes: {
		ac: {
			ct: `${process.env.BASE_URL}en/st/ac/ct`,
			rc: `${process.env.BASE_URL}en/st/ac/rc`,
		},
		dc: `${process.env.BASE_URL}en/st/dc`,
		temperature: `${process.env.BASE_URL}en/st/temp`
	},
	sensorModels: {
		ac: {
			ct: [
				`${process.env.BASE_URL}en/sm/ac/ct/1`,
				`${process.env.BASE_URL}en/sm/ac/ct/2`,
				`${process.env.BASE_URL}en/sm/ac/ct/3`,
				`${process.env.BASE_URL}en/sm/ac/ct/4`,
				`${process.env.BASE_URL}en/sm/ac/ct/5`,
				`${process.env.BASE_URL}en/sm/ac/ct/6`,
				`${process.env.BASE_URL}en/sm/ac/ct/7`,
				`${process.env.BASE_URL}en/sm/ac/ct/8`,
				`${process.env.BASE_URL}en/sm/ac/ct/9`,
			],
			rc: [
				`${process.env.BASE_URL}en/sm/ac/rc/1`,
				`${process.env.BASE_URL}en/sm/ac/rc/2`,
				`${process.env.BASE_URL}en/sm/ac/rc/3`,
				`${process.env.BASE_URL}en/sm/ac/rc/4`,
				`${process.env.BASE_URL}en/sm/ac/rc/5`,
				`${process.env.BASE_URL}en/sm/ac/rc/6`,
				`${process.env.BASE_URL}en/sm/ac/rc/7`,
				`${process.env.BASE_URL}en/sm/ac/rc/8`,
				`${process.env.BASE_URL}en/sm/ac/rc/9`,
			]
		},
		temperature: [
			`${process.env.BASE_URL}en/sm/temp/1`,
			`${process.env.BASE_URL}en/sm/temp/2`
		]
	}
}
