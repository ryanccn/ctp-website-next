import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { FontaineTransform } from 'fontaine';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [imagetools(), FontaineTransform.vite({ fallbacks: ['Arial', 'Roboto'] }), sveltekit()]
});
