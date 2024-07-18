import { z } from 'zod'
import type { ProblemDetails } from '../types/ProblemDetails'

/**
 * @description Problem Details (RFC9457)
 */
export const problemDetailsSchema = z
	.object({
		title: z.coerce.string().describe('\u4E3B\u8981\u306A\u30A8\u30E9\u30FC\u306E\u8981\u56E0'),
		type: z.coerce.string().describe('\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9'),
		detail: z.coerce
			.string()
			.describe('\u30A8\u30E9\u30FC\u306E\u8A73\u7D30\u306B\u95A2\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8'),
		status: z.coerce.number().min(400).max(600).describe('HTTP\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9'),
	})
	.describe('Problem Details (RFC9457)') as z.ZodType<ProblemDetails>
