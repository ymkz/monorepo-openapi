import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { completeTodoParams } from '../generated/openapi'
import { logger } from '../helper/logger'

export const completeTodoHandlers = factory.createHandlers(zValidator('param', completeTodoParams), (ctx) => {
	const param = ctx.req.valid('param')
	logger.info({ param })
	return ctx.text('completeTodo', 200)
})
