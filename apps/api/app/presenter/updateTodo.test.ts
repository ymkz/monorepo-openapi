import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('updateTodoHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000/todos/1', {
		method: 'PUT',
		body: JSON.stringify({ title: 'テストタイトル' }),
		headers: new Headers({ 'Content-Type': 'application/json' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'updateTodo')
})

test('invalid path param', async () => {
	const request = new Request('http://localhost:4000/todos/hello', {
		method: 'PUT',
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})

test('invalid body', async () => {
	const request = new Request('http://localhost:4000/todos/1', {
		method: 'PUT',
		body: JSON.stringify({ foo: 'bar' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
