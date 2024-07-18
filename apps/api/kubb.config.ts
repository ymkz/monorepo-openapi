import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/swagger-ts'
import { pluginZod } from '@kubb/swagger-zod'

export default defineConfig({
	root: '.',
	hooks: {
		done: ['biome check --write app/generated'],
	},
	input: {
		path: '../spec/openapi.yaml',
	},
	output: {
		path: 'app/generated',
		clean: true,
	},
	plugins: [
		pluginOas(),
		pluginTs(),
		pluginZod({
			typed: true,
			coercion: true,
			unknownType: 'unknown',
			dateType: 'stringOffset',
		}),
	],
})
