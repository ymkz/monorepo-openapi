import { serve } from '@hono/node-server'
import { showRoutes } from 'hono/dev'
import { logger } from './helper/logger'
import { app } from './register'

showRoutes(app)

serve({ fetch: app.fetch, port: 4000 }, (info) => {
	logger.info(`ready on http://localhost:${info.port}`)
})
