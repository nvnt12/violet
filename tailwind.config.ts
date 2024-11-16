import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				'midnight-blue': '#2A3663',
				beige: '#B59F78',
				'light-sage-green': '#D8DBBD',
				'cream-white': '#FAF6E3',
				yellow: '#edcf5d'
			}
		}
	},
	plugins: []
} satisfies Config
