import { strict as assert, describe, test } from 'poku'
import { env } from '../helper/env'
import { app } from '../register'

describe('updateTodoHandlers')

test('ok', async () => {
	const request = new Request(`${env.APP_HOST}/todos/1`, {
		method: 'PUT',
		body: JSON.stringify({ title: 'テストタイトル' }),
		headers: new Headers({ 'Content-Type': 'application/json' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'updateTodo')
})

test('invalid path param', async () => {
	const request = new Request(`${env.APP_HOST}/todos/hello`, {
		method: 'PUT',
		body: JSON.stringify({ title: 'テストタイトル' }),
		headers: new Headers({ 'Content-Type': 'application/json' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})

test('invalid body', async () => {
	const request = new Request(`${env.APP_HOST}/todos/1`, {
		method: 'PUT',
		headers: new Headers({ 'Content-Type': 'application/json' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
