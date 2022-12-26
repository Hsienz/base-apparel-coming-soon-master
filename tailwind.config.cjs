/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Desaturated_Red: "hsl(0, 36%, 70%)",
				Soft_Red: "hsl(0, 93%, 68%)",

				// Neutral

				Dark_Grayish_Red: "hsl(0, 6%, 24%)",
			},
			fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
		},
	},
	plugins: [],
};
