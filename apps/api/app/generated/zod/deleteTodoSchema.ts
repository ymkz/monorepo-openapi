import { z } from 'zod'
import { problemDetailsSchema } from './problemDetailsSchema'

export const deleteTodoPathParamsSchema = z.object({ id: z.coerce.string() })
/**
 * @description 正常時の応答
 */
export const deleteTodo200Schema = z.unknown()
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export const deleteTodo404Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description エラーが発生した場合の応答
 */
export const deleteTodo500Schema = z.lazy(() => problemDetailsSchema)

export const deleteTodoMutationResponseSchema = z.unknown()
