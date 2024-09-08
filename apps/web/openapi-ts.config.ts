import { resolve } from 'node:path'
import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
	client: '@hey-api/client-fetch',
	input: resolve(process.cwd(), '../spec/openapi.yaml'),
	schemas: false,
	output: {
		path: 'app/generated/openapi',
		format: 'biome',
	},
})
