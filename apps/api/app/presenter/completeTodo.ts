import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { completeTodoPathParamsSchema } from '../generated/openapi'
import { logger } from '../helper/logger'

export const completeTodoHandlers = factory.createHandlers(zValidator('param', completeTodoPathParamsSchema), (ctx) => {
	const param = ctx.req.valid('param')
	logger.info({ param })
	return ctx.text('completeTodo', 200)
})
