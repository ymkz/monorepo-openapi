import { zValidator } from '@hono/zod-validator'
import { factory } from '../../factory'
import { deleteTodoParams } from '../../generated/openapi'
import { logger } from '../../helper/logger'
import { applyCoerceNumber } from '../../helper/zod'

export const deleteTodoHandlers = factory.createHandlers(
	zValidator('param', applyCoerceNumber(deleteTodoParams)),
	(ctx) => {
		const param = ctx.req.valid('param')
		logger.info({ param })
		return ctx.text('deleteTodo', 200)
	},
)
