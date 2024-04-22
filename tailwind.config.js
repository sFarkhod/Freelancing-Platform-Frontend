/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#494949',
				secondary: '#00FF00',
				searchInputBorder: 'rgba(0, 0, 0, 0.2)',
				textYellow: '#8CDE29',
			},
			fontFamily: {
				mako: ['Mako', 'sans-serif'],
				monda: ['Monda', 'sans-serif'],
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
}
