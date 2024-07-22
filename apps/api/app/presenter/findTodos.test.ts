import { strict as assert, describe, test } from 'poku'
import { env } from '../helper/env'
import { app } from '../register'

describe('findTodosHandlers')

test('ok', async () => {
	const request = new Request(`${env.APP_HOST}/todos`, {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'findTodos')
})
