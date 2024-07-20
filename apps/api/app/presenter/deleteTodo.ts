import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { deleteTodoPathParamsSchema } from '../generated'
import { logger } from '../helper/logger'

export const deleteTodoHandlers = factory.createHandlers(zValidator('param', deleteTodoPathParamsSchema), (ctx) => {
	const param = ctx.req.valid('param')
	logger.info(param)
	return ctx.text('deleteTodo', 200)
})
