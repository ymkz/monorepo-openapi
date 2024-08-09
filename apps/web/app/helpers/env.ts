import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
	emptyStringAsUndefined: true,
	runtimeEnv: process.env,
	server: {
		// environments
		LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
		APP_PORT: z.coerce.number().int().positive().default(3000),
		APP_HOST: z.string().url().default('http://localhost:3000'),

		// configs
		NODE_ENV: z.enum(['development', 'production', 'test']),
		APP_ENV: z.enum(['local', 'alpha', 'beta', 'production', 'test']),
		API_URL: z.string().url(),
	},
})
