module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				'white-0': '#ffffff',
				'dark-gray': '#35344C',
				'light-gray': '#C3C1D7',
				'medium-gray': '#E5E5E4',
				'light-purple': '#F3F1FE',
				'purple-800': '#745CF1',
				purple: '#3F25C8'
			},
			fontFamily: {
				amplitudeWide: ['Amplitude Wide'],
				amplitudeWideBook: ['Amplitude Wide Book'],
				amplitudeWideMedium: ['Amplitude Wide Medium'],
				inter: ['Inter']
			}
		}
	},
	plugins: []
};
