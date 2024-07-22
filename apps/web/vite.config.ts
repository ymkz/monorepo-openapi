import { config } from '@dotenvx/dotenvx'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'

config({ path: '.env.local' })

export default defineConfig({
	clearScreen: false,
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
	],
})
