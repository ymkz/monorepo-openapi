import { defineConfig } from 'orval'

export default defineConfig({
	api: {
		input: {
			target: '../spec/openapi.yaml',
		},
		output: {
			target: './app/generated/openapi',
			mode: 'single',
			client: 'zod',
			biome: true,
		},
	},
})
