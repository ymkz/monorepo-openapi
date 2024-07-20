import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('healthcheckHandlers')

test('ok', async () => {
	const request = new Request('http://localhost:4000', {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'UP')
})

test('ok', async () => {
	const request = new Request('http://localhost:4000/healthz', {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'UP')
})
