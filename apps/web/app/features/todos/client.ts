import { createClient } from '@hey-api/client-fetch'

export const todosApiClient = createClient({
	baseUrl: 'http://localhost:3001',
})
