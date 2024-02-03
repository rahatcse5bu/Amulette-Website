/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors:{
				primaryColor:'#F65F19',
				menuColor : 'rgba(37, 40, 43, 0.70)',
				headingColor:'#25282B',
				categoryTabColor:'rgba(246, 95, 25, 0.10)',
			},
			backgroundImage:{
				heroDesktop: `url('Images/Hero/Hero-BG.svg')`,
			},
			fontFamily: {
				Montserrat: ['Montserrat', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
		},
			rotate: {
				'minus-45': '-45deg', // Add a custom rotation
 },
		},
	},
	plugins: [],
};
