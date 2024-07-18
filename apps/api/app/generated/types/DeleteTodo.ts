import type { ProblemDetails } from './ProblemDetails'

export type DeleteTodoPathParams = {
	/**
	 * @type string
	 */
	id: string
}
/**
 * @description 正常時の応答
 */
export type DeleteTodo200 = any
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export type DeleteTodo404 = ProblemDetails
/**
 * @description エラーが発生した場合の応答
 */
export type DeleteTodo500 = ProblemDetails
export type DeleteTodoMutationResponse = any
export type DeleteTodoMutation = {
	Response: DeleteTodoMutationResponse
	PathParams: DeleteTodoPathParams
	Errors: DeleteTodo404 | DeleteTodo500
}
