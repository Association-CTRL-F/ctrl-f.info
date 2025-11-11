import type { Config } from 'release-it';

export default {
	hooks: {
		'before:init': ['pnpm lint'],
	},
	git: {
		commitMessage: 'chore: release v${version}',
		commit: true,
		tag: true,
		push: true,
	},
} satisfies Config;
