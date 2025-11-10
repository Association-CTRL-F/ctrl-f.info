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
					name: 'Inter',
					weights: ['400', '500', '600', '700'],
				},
				serif: {
					name: 'Lora',
					weights: ['400', '500', '600', '700'],
				},
			},
		}),
	],
});
