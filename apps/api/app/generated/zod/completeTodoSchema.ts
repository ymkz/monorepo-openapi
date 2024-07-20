import { z } from 'zod'
import { todoIdSchema } from './todoIdSchema'
import { todoSchema } from './todoSchema'
import { problemDetailsSchema } from './problemDetailsSchema'

export const completeTodoPathParamsSchema = z.object({ id: z.lazy(() => todoIdSchema) })
/**
 * @description 正常時の応答
 */
export const completeTodo200Schema = z.lazy(() => todoSchema)
/**
 * @description リクエストがされたidが存在しない場合の応答
 */
export const completeTodo404Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description エラーが発生した場合の応答
 */
export const completeTodo500Schema = z.lazy(() => problemDetailsSchema)
/**
 * @description 正常時の応答
 */
export const completeTodoMutationResponseSchema = z.lazy(() => todoSchema)
