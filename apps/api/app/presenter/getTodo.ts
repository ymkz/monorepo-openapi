import { zValidator } from '@hono/zod-validator'
import { factory } from '../factory'
import { getTodoParams } from '../generated/openapi'
import { logger } from '../helper/logger'
import { applyCoerceNumber } from '../helper/zod'

export const getTodoHandlers = factory.createHandlers(zValidator('param', applyCoerceNumber(getTodoParams)), (ctx) => {
	const param = ctx.req.valid('param')
	logger.info({ param })
	return ctx.text('getTodo', 200)
})
