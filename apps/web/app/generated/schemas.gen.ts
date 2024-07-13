// This file is auto-generated by @hey-api/openapi-ts

export const $ProblemDetails = {
	type: 'object',
	description: 'Problem Details (RFC9457)',
	required: ['title', 'type', 'detail', 'status'],
	properties: {
		title: {
			type: 'string',
			description: '主要なエラーの要因',
			example: 'DB Connection Timeout',
		},
		type: {
			type: 'string',
			description: 'エラーコード',
			example: 'E_001',
		},
		detail: {
			type: 'string',
			description: 'エラーの詳細に関するメッセージ',
			example: 'failed to establish connection',
		},
		status: {
			type: 'integer',
			format: 'int32',
			minimum: 400,
			maximum: 600,
			description: 'HTTPステータスコード',
			example: 500,
		},
	},
} as const

export const $Todo = {
	type: 'object',
	required: ['id', 'title', 'createdAt'],
	properties: {
		id: {
			type: 'string',
			description: '連番で発番されるid',
			example: 1,
		},
		title: {
			type: 'string',
			description: 'タイトル',
			example: 'TODOタイトル',
		},
		completedAt: {
			type: 'string',
			format: 'date-time',
			description: '完了時刻（ISO8601）（最後に完了にした時刻が入る）',
			example: '2024-01-23T01:23:45+09:00',
		},
		createdAt: {
			type: 'string',
			format: 'date-time',
			description: '作成時刻（ISO8601）',
			example: '2024-01-23T01:23:45+09:00',
		},
		updatedAt: {
			type: 'string',
			format: 'date-time',
			description: '更新時刻（ISO8601）（更新されるたびに更新時刻が入る）',
			example: '2024-01-23T01:23:45+09:00',
		},
		deletedAt: {
			type: 'string',
			format: 'date-time',
			description: '削除時刻（ISO8601）（論理削除されたら削除時刻が入る）',
			example: '2024-01-23T01:23:45+09:00',
		},
	},
} as const
