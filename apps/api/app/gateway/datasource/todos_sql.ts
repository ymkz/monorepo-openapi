import type mysql from 'mysql2/promise'
import type { RowDataPacket } from 'mysql2/promise'

type Client = mysql.Connection | mysql.Pool

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

export async function findTodos(client: Client): Promise<FindTodosRow[]> {
	const [rows] = await client.query<RowDataPacket[]>({
		sql: findTodosQuery,
		values: [],
		rowsAsArray: true,
	})
	return rows.map((row) => {
		return {
			id: row[0],
			title: row[1],
			completedAt: row[2],
			createdAt: row[3],
			updatedAt: row[4],
			deletedAt: row[5],
		}
	})
}

export const getTodoQuery = `-- name: GetTodo :one
SELECT id, title, completed_at, created_at, updated_at, deleted_at
FROM todos
WHERE id = ?
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

export async function getTodo(client: Client, args: GetTodoArgs): Promise<GetTodoRow | null> {
	const [rows] = await client.query<RowDataPacket[]>({
		sql: getTodoQuery,
		values: [args.id],
		rowsAsArray: true,
	})
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

export const getTodoByLastInsertIdQuery = `-- name: GetTodoByLastInsertId :one
SELECT id, title, completed_at, created_at, updated_at, deleted_at
FROM todos
WHERE id = LAST_INSERT_ID()
LIMIT 1`

export interface GetTodoByLastInsertIdRow {
	id: number
	title: string
	completedAt: Date | null
	createdAt: Date
	updatedAt: Date | null
	deletedAt: Date | null
}

export async function getTodoByLastInsertId(client: Client): Promise<GetTodoByLastInsertIdRow | null> {
	const [rows] = await client.query<RowDataPacket[]>({
		sql: getTodoByLastInsertIdQuery,
		values: [],
		rowsAsArray: true,
	})
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
VALUES (?)`

export interface CreateTodoArgs {
	title: string
}

export async function createTodo(client: Client, args: CreateTodoArgs): Promise<void> {
	await client.query({
		sql: createTodoQuery,
		values: [args.title],
	})
}

export const updateTodoQuery = `-- name: UpdateTodo :exec
UPDATE todos
SET title = ?
WHERE id = ?`

export interface UpdateTodoArgs {
	title: string
	id: number
}

export async function updateTodo(client: Client, args: UpdateTodoArgs): Promise<void> {
	await client.query({
		sql: updateTodoQuery,
		values: [args.title, args.id],
	})
}

export const deleteTodoQuery = `-- name: DeleteTodo :exec
DELETE FROM todos
WHERE id = ?`

export interface DeleteTodoArgs {
	id: number
}

export async function deleteTodo(client: Client, args: DeleteTodoArgs): Promise<void> {
	await client.query({
		sql: deleteTodoQuery,
		values: [args.id],
	})
}
