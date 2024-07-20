import { testClient } from 'hono/testing'
import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('getTodoHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000/todos/1', {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'getTodo')
})

test('invalid path param', async () => {
	const request = new Request('http://localhost:4000/todos/hello', {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
