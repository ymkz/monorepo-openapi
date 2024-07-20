import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('findTodosHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000/todos', {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'findTodos')
})
