import type { ProblemDetails } from './ProblemDetails'
import type { Todo } from './Todo'

export type FindTodosQueryParams = {
	/**
	 * @type integer | undefined, int32
	 */
	limit?: number
}
/**
 * @description 正常時の応答
 */
export type FindTodos200 = Todo[]
/**
 * @description リクエストが不正だった場合の応答
 */
export type FindTodos400 = ProblemDetails
/**
 * @description エラーが発生した場合の応答
 */
export type FindTodos500 = ProblemDetails
/**
 * @description 正常時の応答
 */
export type FindTodosQueryResponse = Todo[]
export type FindTodosQuery = {
	Response: FindTodosQueryResponse
	QueryParams: FindTodosQueryParams
	Errors: FindTodos400 | FindTodos500
}
