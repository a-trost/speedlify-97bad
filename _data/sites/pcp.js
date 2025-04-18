module.exports = {
	name: "PCP", // optional, falls back to object key
	description: "Philadelphia Center for Psychotherapy",
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
		"https://philadelphiapsychotherapy.org/",
		"https://philadelphia-psychotherapy.netlify.app/",
	]
};
