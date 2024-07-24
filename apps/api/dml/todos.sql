-- name: FindTodos :many
SELECT *
FROM todos;

-- name: GetTodo :one
SELECT *
FROM todos
WHERE id = ?
LIMIT 1;

-- name: GetTodoByLastInsertId :one
SELECT *
FROM todos
WHERE id = LAST_INSERT_ID()
LIMIT 1;

-- name: CreateTodo :exec
INSERT INTO todos (title)
VALUES (?);

-- name: UpdateTodo :exec
UPDATE todos
SET title = ?
WHERE id = ?;

-- name: DeleteTodo :exec
DELETE FROM todos
WHERE id = ?;
