import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { findTodosQueryParamsSchema } from '../generated'
import { findTodosUsecase } from '../usecase/findTodos'

export const findTodosHandlers = factory.createHandlers(zValidator('query', findTodosQueryParamsSchema), (ctx) => {
	const query = ctx.req.valid('query')
	const result = findTodosUsecase(query)
	return ctx.text('findTodos', 200)
})
