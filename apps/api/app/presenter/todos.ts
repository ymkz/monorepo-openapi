import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import {
	completeTodoPathParamsSchema,
	createTodoMutationRequestSchema,
	deleteTodoPathParamsSchema,
	findTodosQueryParamsSchema,
	getTodoPathParamsSchema,
	updateTodoMutationRequestSchema,
	updateTodoPathParamsSchema,
} from '../generated'
import { logger } from '../helper/logger'

const app = new Hono()

export const todosRoute = app
	.get('', zValidator('query', findTodosQueryParamsSchema), (ctx) => {
		const query = ctx.req.valid('query')
		logger.info({ query })
		return ctx.text('findTodos', 200)
	})
	.post('', zValidator('json', createTodoMutationRequestSchema), (ctx) => {
		const body = ctx.req.valid('json')
		logger.info({ body })
		return ctx.text('createTodo', 200)
	})
	.get(':id', zValidator('param', getTodoPathParamsSchema), (ctx) => {
		const param = ctx.req.valid('param')
		logger.info({ param })
		return ctx.text('getTodo', 200)
	})
	.put(
		':id',
		zValidator('param', updateTodoPathParamsSchema),
		zValidator('json', updateTodoMutationRequestSchema),
		(ctx) => {
			const param = ctx.req.valid('param')
			const body = ctx.req.valid('json')
			logger.info({ param, body })
			return ctx.text('updateTodo', 200)
		},
	)
	.delete(':id', zValidator('param', deleteTodoPathParamsSchema), (ctx) => {
		const param = ctx.req.valid('param')
		logger.info(param)
		return ctx.text('deleteTodo', 200)
	})
	.post(':id/complete', zValidator('param', completeTodoPathParamsSchema), (ctx) => {
		const param = ctx.req.valid('param')
		logger.info({ param })
		return ctx.text('completeTodo', 200)
	})
