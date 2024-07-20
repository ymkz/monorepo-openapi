import { TodoId } from './TodoId'
import type { ProblemDetails } from './ProblemDetails'
import type { Todo } from './Todo'

export type UpdateTodoPathParams = {
	id: TodoId
}
/**
 * @description 正常時の応答
 */
export type UpdateTodo200 = Todo
/**
 * @description リクエストが不正だった場合の応答
 */
export type UpdateTodo400 = ProblemDetails
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export type UpdateTodo404 = ProblemDetails
/**
 * @description エラーが発生した場合の応答
 */
export type UpdateTodo500 = ProblemDetails
export type UpdateTodoMutationRequest = {
	/**
	 * @description タイトル
	 * @type string
	 */
	title: string
}
/**
 * @description 正常時の応答
 */
export type UpdateTodoMutationResponse = Todo
export type UpdateTodoMutation = {
	Response: UpdateTodoMutationResponse
	Request: UpdateTodoMutationRequest
	PathParams: UpdateTodoPathParams
	Errors: UpdateTodo400 | UpdateTodo404 | UpdateTodo500
}
