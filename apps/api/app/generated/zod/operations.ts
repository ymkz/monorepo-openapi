import {
	findTodosQueryResponseSchema,
	findTodos400Schema,
	findTodos500Schema,
	findTodosQueryParamsSchema,
} from './findTodosSchema'
import {
	createTodoMutationRequestSchema,
	createTodoMutationResponseSchema,
	createTodo400Schema,
	createTodo500Schema,
} from './createTodoSchema'
import {
	updateTodoMutationRequestSchema,
	updateTodoMutationResponseSchema,
	updateTodo400Schema,
	updateTodo404Schema,
	updateTodo500Schema,
	updateTodoPathParamsSchema,
} from './updateTodoSchema'
import {
	getTodoQueryResponseSchema,
	getTodo404Schema,
	getTodo500Schema,
	getTodoPathParamsSchema,
} from './getTodoSchema'
import {
	deleteTodoMutationResponseSchema,
	deleteTodo404Schema,
	deleteTodo500Schema,
	deleteTodoPathParamsSchema,
} from './deleteTodoSchema'
import {
	completeTodoMutationResponseSchema,
	completeTodo404Schema,
	completeTodo500Schema,
	completeTodoPathParamsSchema,
} from './completeTodoSchema'

export const operations = {
	findTodos: {
		request: undefined,
		parameters: {
			path: undefined,
			query: findTodosQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: findTodosQueryResponseSchema,
			400: findTodos400Schema,
			500: findTodos500Schema,
			default: findTodosQueryResponseSchema,
		},
		errors: {
			400: findTodos400Schema,
			500: findTodos500Schema,
		},
	},
	createTodo: {
		request: createTodoMutationRequestSchema,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: createTodoMutationResponseSchema,
			400: createTodo400Schema,
			500: createTodo500Schema,
			default: createTodoMutationResponseSchema,
		},
		errors: {
			400: createTodo400Schema,
			500: createTodo500Schema,
		},
	},
	updateTodo: {
		request: updateTodoMutationRequestSchema,
		parameters: {
			path: updateTodoPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: updateTodoMutationResponseSchema,
			400: updateTodo400Schema,
			404: updateTodo404Schema,
			500: updateTodo500Schema,
			default: updateTodoMutationResponseSchema,
		},
		errors: {
			400: updateTodo400Schema,
			404: updateTodo404Schema,
			500: updateTodo500Schema,
		},
	},
	getTodo: {
		request: undefined,
		parameters: {
			path: getTodoPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getTodoQueryResponseSchema,
			404: getTodo404Schema,
			500: getTodo500Schema,
			default: getTodoQueryResponseSchema,
		},
		errors: {
			404: getTodo404Schema,
			500: getTodo500Schema,
		},
	},
	deleteTodo: {
		request: undefined,
		parameters: {
			path: deleteTodoPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: deleteTodoMutationResponseSchema,
			404: deleteTodo404Schema,
			500: deleteTodo500Schema,
			default: deleteTodoMutationResponseSchema,
		},
		errors: {
			404: deleteTodo404Schema,
			500: deleteTodo500Schema,
		},
	},
	completeTodo: {
		request: undefined,
		parameters: {
			path: completeTodoPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: completeTodoMutationResponseSchema,
			404: completeTodo404Schema,
			500: completeTodo500Schema,
			default: completeTodoMutationResponseSchema,
		},
		errors: {
			404: completeTodo404Schema,
			500: completeTodo500Schema,
		},
	},
} as const
export const paths = {
	'/todos': {
		get: operations['findTodos'],
		post: operations['createTodo'],
	},
	'/todos/{id}': {
		put: operations['updateTodo'],
		get: operations['getTodo'],
		delete: operations['deleteTodo'],
	},
	'/todos/{id}/complete': {
		put: operations['completeTodo'],
	},
} as const
