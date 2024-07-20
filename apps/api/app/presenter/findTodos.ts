import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { findTodosQueryParamsSchema } from '../generated'
import { logger } from '../helper/logger'

export const findTodosHandlers = factory.createHandlers(zValidator('query', findTodosQueryParamsSchema), (ctx) => {
	const query = ctx.req.valid('query')
	logger.info({ query })
	return ctx.text('findTodos', 200)
})
