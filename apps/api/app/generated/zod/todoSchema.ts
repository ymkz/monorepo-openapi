import { z } from 'zod'
import type { Todo } from '../types/Todo'

export const todoSchema = z.object({
	id: z.coerce.string().describe('\u9023\u756A\u3067\u767A\u756A\u3055\u308C\u308Bid'),
	title: z.coerce.string().describe('\u30BF\u30A4\u30C8\u30EB'),
	completedAt: z
		.string()
		.datetime({ offset: true })
		.describe(
			'\u5B8C\u4E86\u6642\u523B\uFF08ISO8601\uFF09\uFF08\u6700\u5F8C\u306B\u5B8C\u4E86\u306B\u3057\u305F\u6642\u523B\u304C\u5165\u308B\uFF09',
		)
		.optional(),
	createdAt: z.string().datetime({ offset: true }).describe('\u4F5C\u6210\u6642\u523B\uFF08ISO8601\uFF09'),
	updatedAt: z
		.string()
		.datetime({ offset: true })
		.describe(
			'\u66F4\u65B0\u6642\u523B\uFF08ISO8601\uFF09\uFF08\u66F4\u65B0\u3055\u308C\u308B\u305F\u3073\u306B\u66F4\u65B0\u6642\u523B\u304C\u5165\u308B\uFF09',
		)
		.optional(),
	deletedAt: z
		.string()
		.datetime({ offset: true })
		.describe(
			'\u524A\u9664\u6642\u523B\uFF08ISO8601\uFF09\uFF08\u8AD6\u7406\u524A\u9664\u3055\u308C\u305F\u3089\u524A\u9664\u6642\u523B\u304C\u5165\u308B\uFF09',
		)
		.optional(),
}) as z.ZodType<Todo>
