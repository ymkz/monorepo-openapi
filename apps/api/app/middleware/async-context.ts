import { createMiddleware } from 'hono/factory'
import { context } from '../helper/context'

export const contextRun = () => {
	return createMiddleware(async (_, next) => {
		return context.run(new Map(), next)
	})
}
