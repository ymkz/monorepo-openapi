import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('completeTodoHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000/todos/1/complete', {
		method: 'PUT',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'completeTodo')
})

test('invalid path param', async () => {
	const request = new Request('http://localhost:4000/todos/hello/complete', {
		method: 'PUT',
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
