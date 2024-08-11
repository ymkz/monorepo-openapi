import postgres from 'postgres'
import { findTodos } from '../gateway/datasource/todos_sql'
import type { FindTodos200, FindTodosQueryParams, Todo } from '../generated'

const sql = postgres()

export const findTodosUsecase = async (query?: FindTodosQueryParams): Promise<FindTodos200> => {
	try {
		const result = await findTodos(sql)

		return result.map((it) => ({
			id: it.id,
			title: it.title,
			completedAt: it.completedAt?.toISOString(),
			createdAt: it.createdAt.toString(),
			updatedAt: it.updatedAt?.toISOString(),
			deletedAt: it.deletedAt?.toISOString(),
		}))
	} catch (e) {
		throw new Error('TODO_USE_APPLICATION_ERROR')
	}
}
