import { describe, expect, test } from 'vitest'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('ok', () => {
	test('default', async () => {
		const request = new Request(`${env.APP_HOST}/todos/1`, {
			method: 'PUT',
			body: JSON.stringify({ title: 'テストタイトル' }),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		})

		const response = await app.request(request)

		expect(response.status).toBe(200)
		expect(await response.text()).toBe('updateTodo')
	})
})

describe('ng', () => {
	test('invalid path param', async () => {
		const request = new Request(`${env.APP_HOST}/todos/hello`, {
			method: 'PUT',
			body: JSON.stringify({ title: 'テストタイトル' }),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		})

		const response = await app.request(request)

		expect(response.status).toBe(400)
	})

	test('invalid body', async () => {
		const request = new Request(`${env.APP_HOST}/todos/1`, {
			method: 'PUT',
			body: JSON.stringify({}),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		})

		const response = await app.request(request)

		expect(response.status).toBe(400)
	})
})
