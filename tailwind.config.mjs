/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#eef7ff',
					100: '#d9eeff',
					200: '#baddff',
					300: '#8cc6ff',
					400: '#57a9ff',
					500: '#2f87f1',
					600: '#1f6ccf',
					700: '#1d58b2',
					800: '#1f4a93',
					900: '#1f3f78',
				},
				accent: '#e8323a',
			},
			fontFamily: {
				display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				soft: '0 12px 40px rgba(15, 23, 42, 0.12)',
			},
		},
	},
	plugins: [],
};
