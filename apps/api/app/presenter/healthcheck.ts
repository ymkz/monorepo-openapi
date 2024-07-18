import { Hono } from 'hono'

const app = new Hono()

export const healthcheckRoute = app
	.get('', (ctx) => {
		return ctx.text('UP', 200)
	})
	.get('health', (ctx) => {
		return ctx.text('UP', 200)
	})
