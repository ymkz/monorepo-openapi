import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('createTodoHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000/todos', {
		method: 'POST',
		body: JSON.stringify({ title: 'テストタイトル' }),
		headers: new Headers({ 'Content-Type': 'application/json' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'createTodo')
})

test('invalid body', async () => {
	const request = new Request('http://localhost:4000/todos', {
		method: 'POST',
		body: JSON.stringify({ foo: 'bar' }),
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
