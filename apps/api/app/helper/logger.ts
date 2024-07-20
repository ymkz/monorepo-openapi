import { pino } from 'pino'
import { Temporal } from 'temporal-polyfill'
import { context } from '../helper/context'

const timestamp = () => {
	return Temporal.Now.zonedDateTimeISO().toString()
}

export const logger = pino({
	enabled: process.env.NODE_ENV !== 'test',
	level: process.env.LOG_LEVEL || 'info',
	timestamp: () => `,"time":"${timestamp()}"`,
	formatters: {
		level: (label) => ({ severity: label }),
		bindings: () => ({}),
	},
	mixin: () => ({
		reqId: context.getStore()?.get('reqId'),
	}),
})
