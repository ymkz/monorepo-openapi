-- name: FindTodos :many
SELECT *
FROM todos;

-- name: GetTodo :one
SELECT *
FROM todos
WHERE id = $1
LIMIT 1;

-- name: CreateTodo :exec
INSERT INTO todos (title)
VALUES ($1)
RETURNING *;

-- name: UpdateTodo :exec
UPDATE todos
SET title = $2
WHERE id = $1
RETURNING *;

-- name: DeleteTodo :exec
DELETE FROM todos
WHERE id = $1
RETURNING *;
