import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { createTodoBody } from '../generated/openapi'
import { logger } from '../helper/logger'

export const createTodoHandlers = factory.createHandlers(zValidator('json', createTodoBody), (ctx) => {
	const body = ctx.req.valid('json')
	logger.info({ body })
	return ctx.text('createTodo', 200)
})
