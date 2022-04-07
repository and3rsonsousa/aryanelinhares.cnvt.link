let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#FCE8EA",
					2: "#EBC6C9",
					3: "#9E6561",
					4: "#623937",
					5: "#fff",
				},
			},
		},
	},
	plugins: [],
};
