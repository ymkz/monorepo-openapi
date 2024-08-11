import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import { factory } from './factory'
import { accessLogger } from './middleware/access-logger'
import { contextRun } from './middleware/async-context'
import { requestId } from './middleware/request-id'
import { completeTodoHandlers } from './presenter/completeTodo'
import { createTodoHandlers } from './presenter/createTodo'
import { deleteTodoHandlers } from './presenter/deleteTodo'
import { findTodosHandlers } from './presenter/findTodos'
import { getTodoHandlers } from './presenter/getTodo'
import { errorHandler } from './presenter/handler/error'
import { notFoundHandler } from './presenter/handler/notFound'
import { healthcheckHandlers } from './presenter/healthcheck'
import { updateTodoHandlers } from './presenter/updateTodo'

const app = factory.createApp()

app.use(contextRun())
app.use(requestId())
app.use(accessLogger())
app.use(secureHeaders())
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:9000'] }))

app.get('/', ...healthcheckHandlers)
app.get('/healthz', ...healthcheckHandlers)
app.get('/todos', ...findTodosHandlers)
app.post('/todos', ...createTodoHandlers)
app.get('/todos/:id', ...getTodoHandlers)
app.put('/todos/:id', ...updateTodoHandlers)
app.delete('/todos/:id', ...deleteTodoHandlers)
app.put('/todos/:id/complete', ...completeTodoHandlers)

app.notFound(notFoundHandler)
app.onError(errorHandler)

export { app }
