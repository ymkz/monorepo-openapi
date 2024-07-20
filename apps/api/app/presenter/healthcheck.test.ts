import { strict as assert, describe, test } from 'poku'
import { app } from '../register'

describe('healthcheckRoute', () => {
	test(async () => {
		const response = await app.request('/')

		assert.equal(response.status, 200)
		assert.equal(await response.text(), 'UP')
	})

	test(async () => {
		const response = await app.request('/health')

		assert.equal(response.status, 200)
		assert.equal(await response.text(), 'UP')
	})
})
