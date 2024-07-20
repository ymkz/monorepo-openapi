import { z } from 'zod'
import type { TodoId } from '../types/TodoId'

/**
 * @description 連番で発番されるid
 */
export const todoIdSchema = z.coerce
	.number()
	.describe('\u9023\u756A\u3067\u767A\u756A\u3055\u308C\u308Bid') as z.ZodType<TodoId>
