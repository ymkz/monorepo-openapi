import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { showRoutes } from 'hono/dev'
import { requestId } from 'hono/request-id'
import { secureHeaders } from 'hono/secure-headers'
import { healthcheckRoute } from './presenter/healthcheck'
import { todosRoute } from './presenter/todos'

const app = new Hono()

app.use('*', requestId())
app.use('*', secureHeaders())
app.use('*', cors({ origin: ['http://localhost:3000', 'http://localhost:3002'] }))

app.route('/', healthcheckRoute)
app.route('/todos', todosRoute)

showRoutes(app)

serve({ fetch: app.fetch, port: 4000 }, (info) => {
	console.log(`ready on http://localhost:${info.port}`)
})
