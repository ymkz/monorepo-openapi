import { z } from 'zod'
import type { ZodNumber, ZodObject, ZodRawShape, ZodTypeAny } from 'zod'

export function applyCoerceNumber<T extends ZodRawShape>(
	schema: ZodObject<T>,
): ZodObject<{ [K in keyof T]: T[K] extends ZodNumber ? z.ZodEffects<z.ZodNumber> : T[K] }> {
	const shape = schema.shape

	const coercedShape: { [K in keyof T]: ZodTypeAny } = {} as { [K in keyof T]: ZodTypeAny }

	for (const key in shape) {
		const field = shape[key]
		if (field instanceof z.ZodNumber) {
			coercedShape[key] = z.coerce.number()
		} else {
			coercedShape[key] = field
		}
	}

	return z.object(coercedShape) as ZodObject<{
		[K in keyof T]: T[K] extends ZodNumber ? z.ZodEffects<z.ZodNumber> : T[K]
	}>
}
