import { strict as assert, describe, test } from 'poku'
import { env } from '../helper/env'
import { app } from '../register'

describe('deleteTodoHandlers')

test('ok', async () => {
	const request = new Request(`${env.APP_HOST}/todos/1`, {
		method: 'DELETE',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'deleteTodo')
})

test('invalid path param', async () => {
	const request = new Request(`${env.APP_HOST}/todos/hello`, {
		method: 'DELETE',
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
