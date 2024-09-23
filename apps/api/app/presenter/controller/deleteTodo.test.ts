import { describe, expect, test } from 'vitest'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('ok', () => {
	test('default', async () => {
		const request = new Request(`${env.APP_HOST}/todos/1`, {
			method: 'DELETE',
		})

		const response = await app.request(request)

		expect(response.status).toBe(200)
		expect(await response.text()).toBe('deleteTodo')
	})
})

describe('ng', () => {
	test('invalid path param', async () => {
		const request = new Request(`${env.APP_HOST}/todos/hello`, {
			method: 'DELETE',
		})

		const response = await app.request(request)

		expect(response.status).toBe(400)
	})
})
