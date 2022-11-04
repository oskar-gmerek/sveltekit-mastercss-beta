import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { MasterCSSVitePlugin } from '@master/css-compiler';

const config: UserConfig = {
	plugins: [sveltekit(), MasterCSSVitePlugin()]
};

export default config;
