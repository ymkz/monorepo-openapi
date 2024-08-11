import type { NotFoundHandler } from 'hono'
import { logger } from '../../helper/logger'

export const notFoundHandler: NotFoundHandler = (ctx) => {
	logger.warn('Not Found')

	return ctx.json(
		{
			title: 'Not Found',
			type: 'not_found',
			detail: 'requested resource not found',
			status: 404,
		},
		404,
	)
}
