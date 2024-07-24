import { z } from 'zod'
import { todoSchema } from './todoSchema'
import { problemDetailsSchema } from './problemDetailsSchema'

/**
 * @description 正常時の応答
 */
export const createTodo200Schema = z.lazy(() => todoSchema)
/**
 * @description リクエストが不正だった場合の応答
 */
export const createTodo400Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description エラーが発生した場合の応答
 */
export const createTodo500Schema = z.lazy(() => problemDetailsSchema)

export const createTodoMutationRequestSchema = z.object({
	title: z.coerce.string().describe('\u30BF\u30A4\u30C8\u30EB'),
})
/**
 * @description 正常時の応答
 */
export const createTodoMutationResponseSchema = z.lazy(() => todoSchema)
