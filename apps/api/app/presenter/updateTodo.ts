import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { updateTodoBody, updateTodoParams } from '../generated/openapi'
import { logger } from '../helper/logger'

export const updateTodoHandlers = factory.createHandlers(
	zValidator('param', updateTodoParams),
	zValidator('json', updateTodoBody),
	(ctx) => {
		const param = ctx.req.valid('param')
		const body = ctx.req.valid('json')
		logger.info({ param, body })
		return ctx.text('updateTodo', 200)
	},
)
