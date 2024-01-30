/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors:{
				primaryColor:'#F65F19',
				menuColor : 'rgba(37, 40, 43, 0.70)',
				headingColor:'#25282B',
			}
		},
	},
	plugins: [],
};
