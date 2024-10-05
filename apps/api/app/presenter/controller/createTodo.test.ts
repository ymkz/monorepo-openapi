import { describe, expect, test } from 'vitest'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('ok', () => {
	test('default', async () => {
		const request = new Request(`${env.APP_HOST}/todos`, {
			method: 'POST',
			body: JSON.stringify({ title: 'テストタイトル' }),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		})

		const response = await app.request(request)

		expect(response.status).toBe(200)
		expect(await response.text()).toBe('createTodo')
	})
})

describe('ng', () => {
	test('invalid body', async () => {
		const request = new Request(`${env.APP_HOST}/todos`, {
			method: 'POST',
			body: JSON.stringify({}),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		})

		const response = await app.request(request)

		expect(response.status).toBe(400)
	})
})
