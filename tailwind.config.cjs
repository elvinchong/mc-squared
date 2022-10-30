/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brown-1': '#c4bbafff',
				'brown-2': '#a5978bff',
				'brown-3': '#5c4742ff',
				'brown-4': '#8d5b4cff',
				'brown-5': '#5a2a27ff'
			}
		}
	},
	plugins: []
};
