// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	build: {
		assets: 'assets',
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: 'assets/[hash][extname]',
					chunkFileNames: 'assets/[hash].js',
					entryFileNames: 'assets/[hash].js',
				},
			},
		},
	},
});
