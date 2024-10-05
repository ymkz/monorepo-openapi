import { describe, expect, test } from 'vitest'
import { env } from '../../helper/env'
import { app } from '../../register'

describe('ok', () => {
	test('default', async () => {
		const request = new Request(`${env.APP_HOST}/todos`, {
			method: 'GET',
		})

		const response = await app.request(request)

		expect(response.status).toBe(200)
		expect(await response.text()).toBe('findTodos')
	})
})
