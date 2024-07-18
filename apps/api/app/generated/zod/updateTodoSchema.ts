import { z } from 'zod'
import { todoSchema } from './todoSchema'
import { problemDetailsSchema } from './problemDetailsSchema'

export const updateTodoPathParamsSchema = z.object({ id: z.coerce.string() })
/**
 * @description 正常時の応答
 */
export const updateTodo200Schema = z.lazy(() => todoSchema)
/**
 * @description リクエストが不正だった場合の応答
 */
export const updateTodo400Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export const updateTodo404Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description エラーが発生した場合の応答
 */
export const updateTodo500Schema = z.lazy(() => problemDetailsSchema)

export const updateTodoMutationRequestSchema = z.object({
	title: z.coerce.string().describe('\u30BF\u30A4\u30C8\u30EB'),
})
/**
 * @description 正常時の応答
 */
export const updateTodoMutationResponseSchema = z.lazy(() => todoSchema)
