import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/Marie220895/Portfolio',
	// base: '/porfolio',

	devToolbar: {
		enabled: false,
	},
	integrations: [react(), tailwind(), sitemap()],
});
