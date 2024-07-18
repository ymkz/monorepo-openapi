import { z } from 'zod'
import { todoSchema } from './todoSchema'
import { problemDetailsSchema } from './problemDetailsSchema'

export const getTodoPathParamsSchema = z.object({ id: z.coerce.string() })
/**
 * @description 正常時の応答
 */
export const getTodo200Schema = z.lazy(() => todoSchema)
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export const getTodo404Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description エラーが発生した場合の応答
 */
export const getTodo500Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description 正常時の応答
 */
export const getTodoQueryResponseSchema = z.lazy(() => todoSchema)
