import { defineConfig, presetIcons, presetWebFonts, presetWind4 } from 'unocss';

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons({
			cdn: 'https://esm.sh/',
		}),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: {
					name: 'fredoka',
					weights: ['400', '500', '600', '700'],
				},
			},
		}),
	],
});
