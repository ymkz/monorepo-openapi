import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { updateTodoMutationRequestSchema, updateTodoPathParamsSchema } from '../generated/openapi'
import { logger } from '../helper/logger'

export const updateTodoHandlers = factory.createHandlers(
	zValidator('param', updateTodoPathParamsSchema),
	zValidator('json', updateTodoMutationRequestSchema),
	(ctx) => {
		const param = ctx.req.valid('param')
		const body = ctx.req.valid('json')
		logger.info({ param, body })
		return ctx.text('updateTodo', 200)
	},
)
