import { z } from 'zod'
import { todoSchema } from './todoSchema'
import { problemDetailsSchema } from './problemDetailsSchema'

export const findTodosQueryParamsSchema = z.object({ limit: z.coerce.number().optional() }).optional()
/**
 * @description 正常時の応答
 */
export const findTodos200Schema = z.array(z.lazy(() => todoSchema))
/**
 * @description リクエストが不正だった場合の応答
 */
export const findTodos400Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description エラーが発生した場合の応答
 */
export const findTodos500Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description 正常時の応答
 */
export const findTodosQueryResponseSchema = z.array(z.lazy(() => todoSchema))
