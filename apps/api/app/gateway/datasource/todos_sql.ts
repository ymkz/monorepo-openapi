import type { Sql } from 'postgres'

export const findTodosQuery = `-- name: FindTodos :many
SELECT id, title, completed_at, created_at, updated_at, deleted_at
FROM todos`

export interface FindTodosRow {
	id: number
	title: string
	completedAt: Date | null
	createdAt: Date
	updatedAt: Date | null
	deletedAt: Date | null
}

export async function findTodos(sql: Sql): Promise<FindTodosRow[]> {
	return (await sql.unsafe(findTodosQuery, []).values()).map((row) => ({
		id: row[0],
		title: row[1],
		completedAt: row[2],
		createdAt: row[3],
		updatedAt: row[4],
		deletedAt: row[5],
	}))
}

export const getTodoQuery = `-- name: GetTodo :one
SELECT id, title, completed_at, created_at, updated_at, deleted_at
FROM todos
WHERE id = $1
LIMIT 1`

export interface GetTodoArgs {
	id: number
}

export interface GetTodoRow {
	id: number
	title: string
	completedAt: Date | null
	createdAt: Date
	updatedAt: Date | null
	deletedAt: Date | null
}

export async function getTodo(sql: Sql, args: GetTodoArgs): Promise<GetTodoRow | null> {
	const rows = await sql.unsafe(getTodoQuery, [args.id]).values()
	if (rows.length !== 1) {
		return null
	}
	const row = rows[0]
	return {
		id: row[0],
		title: row[1],
		completedAt: row[2],
		createdAt: row[3],
		updatedAt: row[4],
		deletedAt: row[5],
	}
}

export const createTodoQuery = `-- name: CreateTodo :exec
INSERT INTO todos (title)
VALUES ($1)
RETURNING id, title, completed_at, created_at, updated_at, deleted_at`

export interface CreateTodoArgs {
	title: string
}

export interface CreateTodoRow {
	id: number
	title: string
	completedAt: Date | null
	createdAt: Date
	updatedAt: Date | null
	deletedAt: Date | null
}

export async function createTodo(sql: Sql, args: CreateTodoArgs): Promise<void> {
	await sql.unsafe(createTodoQuery, [args.title])
}

export const updateTodoQuery = `-- name: UpdateTodo :exec
UPDATE todos
SET title = $2
WHERE id = $1
RETURNING id, title, completed_at, created_at, updated_at, deleted_at`

export interface UpdateTodoArgs {
	id: number
	title: string
}

export interface UpdateTodoRow {
	id: number
	title: string
	completedAt: Date | null
	createdAt: Date
	updatedAt: Date | null
	deletedAt: Date | null
}

export async function updateTodo(sql: Sql, args: UpdateTodoArgs): Promise<void> {
	await sql.unsafe(updateTodoQuery, [args.id, args.title])
}

export const deleteTodoQuery = `-- name: DeleteTodo :exec
DELETE FROM todos
WHERE id = $1
RETURNING id, title, completed_at, created_at, updated_at, deleted_at`

export interface DeleteTodoArgs {
	id: number
}

export interface DeleteTodoRow {
	id: number
	title: string
	completedAt: Date | null
	createdAt: Date
	updatedAt: Date | null
	deletedAt: Date | null
}

export async function deleteTodo(sql: Sql, args: DeleteTodoArgs): Promise<void> {
	await sql.unsafe(deleteTodoQuery, [args.id])
}
