import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { createTodoMutationRequestSchema } from '../generated/openapi'
import { logger } from '../helper/logger'

export const createTodoHandlers = factory.createHandlers(zValidator('json', createTodoMutationRequestSchema), (ctx) => {
	const body = ctx.req.valid('json')
	logger.info({ body })
	return ctx.text('createTodo', 200)
})
