import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	publicDir: 'Public',
	build: {
		outDir: 'Distribute',
		assetsDir: 'Assets'
	},
	server: {
		port: 5173
	}
})