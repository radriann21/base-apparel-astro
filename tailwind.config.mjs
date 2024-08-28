/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-desaturated-red': 'hsl(0, 36%, 70%)',
				'primary-soft-red': 'hsl(0, 93%, 68%)',
				'neutral-dark-grayish-red': 'hsl(0, 6%, 24%)'
			},
			fontFamily: {
				'global': "'Josefin Sans' sans-serif"
			}
		},
	},
	plugins: [],
}
