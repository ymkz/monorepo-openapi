import { createClient } from '@hey-api/client-fetch'
import { env } from '../../helpers/env'

export const todosApiClient = createClient({
	baseUrl: env.API_URL,
})
