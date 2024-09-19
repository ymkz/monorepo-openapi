import { strict as assert, describe, test } from 'poku'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('completeTodoHandlers')

test('ok', async () => {
	const request = new Request(`${env.APP_HOST}/todos/1/complete`, {
		method: 'PUT',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'completeTodo')
})

test('invalid path param', async () => {
	const request = new Request(`${env.APP_HOST}/todos/hello/complete`, {
		method: 'PUT',
	})

	const response = await app.request(request)

	assert.equal(response.status, 400)
})
