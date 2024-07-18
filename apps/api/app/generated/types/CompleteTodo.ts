import type { ProblemDetails } from './ProblemDetails'
import type { Todo } from './Todo'

export type CompleteTodoPathParams = {
	/**
	 * @type string
	 */
	id: string
}
/**
 * @description 正常時の応答
 */
export type CompleteTodo200 = Todo
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export type CompleteTodo404 = ProblemDetails
/**
 * @description エラーが発生した場合の応答
 */
export type CompleteTodo500 = ProblemDetails
/**
 * @description 正常時の応答
 */
export type CompleteTodoMutationResponse = Todo
export type CompleteTodoMutation = {
	Response: CompleteTodoMutationResponse
	PathParams: CompleteTodoPathParams
	Errors: CompleteTodo404 | CompleteTodo500
}
