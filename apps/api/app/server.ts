import { serve } from '@hono/node-server'
import { showRoutes } from 'hono/dev'
import { env } from './helper/env'
import { logger } from './helper/logger'
import { app } from './register'

showRoutes(app)

serve({ fetch: app.fetch, port: env.APP_PORT }, (info) => {
	logger.info(`ready on http://localhost:${info.port}`)
})
