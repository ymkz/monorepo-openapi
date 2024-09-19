import { strict as assert, describe, test } from 'poku'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('healthcheckHandlers')

test('ok', async () => {
	const request = new Request(`${env.APP_HOST}`, {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'UP')
})

test('ok', async () => {
	const request = new Request(`${env.APP_HOST}/healthz`, {
		method: 'GET',
	})

	const response = await app.request(request)

	assert.equal(response.status, 200)
	assert.equal(await response.text(), 'UP')
})
