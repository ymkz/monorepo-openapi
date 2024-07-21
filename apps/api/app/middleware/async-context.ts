import { factory } from '../factory'
import { context } from '../helper/context'

export const contextRun = () => {
	return factory.createMiddleware(async (_, next) => {
		return context.run(new Map(), next)
	})
}
