module.exports = {
	name: "Julie Gulemi Therapy", // optional, falls back to object key
	description: "",
	skip: false,
	options: {
		frequency: 60 * 24 * 3, // 3 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://juliegulemitherapy.com/"
	]
};
