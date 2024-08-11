import type { ErrorHandler } from 'hono'
import { logger } from '../../helper/logger'

export const errorHandler: ErrorHandler = (err, ctx) => {
	logger.error(err)

	return ctx.json(
		{
			title: '',
			type: '',
			detail: '',
			status: 500,
		},
		500,
	)
}
