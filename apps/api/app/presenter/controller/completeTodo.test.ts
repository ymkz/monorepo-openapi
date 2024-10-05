import { describe, expect, test } from 'vitest'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('ok', () => {
	test('default', async () => {
		const request = new Request(`${env.APP_HOST}/todos/1/complete`, {
			method: 'PUT',
		})

		const response = await app.request(request)

		expect(response.status).toBe(200)
		expect(await response.text()).toBe('completeTodo')
	})
})

describe('ng', () => {
	test('invalid path param', async () => {
		const request = new Request(`${env.APP_HOST}/todos/hello/complete`, {
			method: 'PUT',
		})

		const response = await app.request(request)

		expect(response.status).toBe(400)
	})
})
