import { factory } from '../factory'

export const healthcheckHandlers = factory.createHandlers((ctx) => {
	return ctx.text('UP', 200)
})
