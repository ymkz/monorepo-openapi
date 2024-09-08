import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { deleteTodoParams } from '../generated/openapi'
import { logger } from '../helper/logger'

export const deleteTodoHandlers = factory.createHandlers(zValidator('param', deleteTodoParams), (ctx) => {
	const param = ctx.req.valid('param')
	logger.info({ param })
	return ctx.text('deleteTodo', 200)
})
