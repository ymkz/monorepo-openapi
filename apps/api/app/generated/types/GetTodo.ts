import { TodoId } from './TodoId'
import type { ProblemDetails } from './ProblemDetails'
import type { Todo } from './Todo'

export type GetTodoPathParams = {
	id: TodoId
}
/**
 * @description 正常時の応答
 */
export type GetTodo200 = Todo
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export type GetTodo404 = ProblemDetails
/**
 * @description エラーが発生した場合の応答
 */
export type GetTodo500 = ProblemDetails
/**
 * @description 正常時の応答
 */
export type GetTodoQueryResponse = Todo
export type GetTodoQuery = {
	Response: GetTodoQueryResponse
	PathParams: GetTodoPathParams
	Errors: GetTodo404 | GetTodo500
}
