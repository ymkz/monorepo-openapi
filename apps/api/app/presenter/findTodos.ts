import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { findTodosQueryParams } from '../generated/openapi'
import { logger } from '../helper/logger'
import { applyCoerceNumber } from '../helper/zod'

export const findTodosHandlers = factory.createHandlers(
	zValidator('query', applyCoerceNumber(findTodosQueryParams)),
	(ctx) => {
		const query = ctx.req.valid('query')
		logger.info({ query })
		return ctx.text('findTodos', 200)
	},
)
