import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('deleteTodoHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000/todos/1', {
		method: 'DELETE',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'deleteTodo')
})

test('Invalid path param', async () => {
	const request = new Request('http://localhost:4000/todos/hello', {
		method: 'DELETE',
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
