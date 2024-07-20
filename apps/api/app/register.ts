import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import { accessLogger } from './middleware/access-logger'
import { contextRun } from './middleware/async-context'
import { requestId } from './middleware/request-id'
import { healthcheckRoute } from './presenter/healthcheck'
import { todosRoute } from './presenter/todos'

const app = new Hono()

app.use(contextRun())
app.use(requestId())
app.use(accessLogger())
app.use(secureHeaders())
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3002'] }))

app.route('/', healthcheckRoute)
app.route('/todos', todosRoute)

export { app }
