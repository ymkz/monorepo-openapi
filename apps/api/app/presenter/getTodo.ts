import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { getTodoPathParamsSchema } from '../generated'
import { logger } from '../helper/logger'

export const getTodoHandlers = factory.createHandlers(zValidator('param', getTodoPathParamsSchema), (ctx) => {
	const param = ctx.req.valid('param')
	logger.info({ param })
	return ctx.text('getTodo', 200)
})
