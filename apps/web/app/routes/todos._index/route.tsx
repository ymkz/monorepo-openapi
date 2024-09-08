import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { todosApiClient } from '../../features/todos/client'
import { findTodos } from '../../generated/openapi'

export const meta: MetaFunction = () => {
	return [{ title: 'Todos - アプリケーション名' }]
}

export const loader = async (args: LoaderFunctionArgs) => {
	const result = await findTodos({ client: todosApiClient })
	// TODO: エラー処理

	return { findTodosResult: result.data }
}

export default function Route() {
	const loaderData = useLoaderData<typeof loader>()

	return (
		<div className="container mx-auto">
			<h1>Todos</h1>
			<div>
				{loaderData.findTodosResult?.todos.map((todo) => (
					<div key={todo.id}>{JSON.stringify(todo)}</div>
				))}
			</div>
		</div>
	)
}
