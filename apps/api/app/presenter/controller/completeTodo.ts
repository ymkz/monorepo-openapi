import { zValidator } from '@hono/zod-validator'
import { factory } from '../../factory'
import { completeTodoParams } from '../../generated/openapi'
import { logger } from '../../helper/logger'
import { applyCoerceNumber } from '../../helper/zod'

export const completeTodoHandlers = factory.createHandlers(
	zValidator('param', applyCoerceNumber(completeTodoParams)),
	(ctx) => {
		const param = ctx.req.valid('param')
		logger.info({ param })
		return ctx.text('completeTodo', 200)
	},
)
