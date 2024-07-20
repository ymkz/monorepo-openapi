import { getRandomValues } from 'node:crypto'
import { createMiddleware } from 'hono/factory'
import { context } from '../helper/context'

const randomId = () => {
	const uint32 = getRandomValues(new Uint32Array(1))[0]
	return uint32.toString(16) // 8桁のランダムな文字列を生成
}

export const requestId = () => {
	return createMiddleware(async (ctx, next) => {
		const header = ctx.req.header()
		const reqId = header['X-Request-Id'] ?? randomId()
		context.getStore()?.set('reqId', reqId)
		await next()
	})
}
