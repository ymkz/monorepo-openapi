import type { ProblemDetails } from './ProblemDetails'
import type { Todo } from './Todo'

/**
 * @description 正常時の応答
 */
export type CreateTodo200 = Todo
/**
 * @description リクエストが不正だった場合の応答
 */
export type CreateTodo400 = ProblemDetails
/**
 * @description エラーが発生した場合の応答
 */
export type CreateTodo500 = ProblemDetails
export type CreateTodoMutationRequest = {
	/**
	 * @description タイトル
	 * @type string
	 */
	title: string
}
/**
 * @description 正常時の応答
 */
export type CreateTodoMutationResponse = Todo
export type CreateTodoMutation = {
	Response: CreateTodoMutationResponse
	Request: CreateTodoMutationRequest
	Errors: CreateTodo400 | CreateTodo500
}
