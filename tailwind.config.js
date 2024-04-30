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
			boxShadow: {
				buttonShadow: '-3px 4px 0px 0px rgba(73, 73, 73, 0.83)',
				cardImageShadow:
					'0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
				cardShadow: '0 4px 9px 0 rgba(0, 0, 0, 0.2)',
				secondCardShadow:
					'rgba(73, 73, 73, 0.4) 5px 5px, rgba(73, 73, 73, 0.3) 10px 10px, rgba(73, 73, 73, 0.2) 15px 15px, rgba(73, 73, 73, 0.1) 20px 20px, rgba(73, 73, 73, 0.05) 25px 25px;',
			},
			fontFamily: {
				mako: ['Mako', 'sans-serif'],
				monda: ['Monda', 'sans-serif'],
				makien: ['Makien', 'sans-serif'],
				abhaya: ['Abhaya Libre ExtraBold', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
				'3xl': '1920px',
			},
		},
	},
	plugins: [],
}
