import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { todosApiClient } from '../../features/todos/client'
import { getTodo } from '../../generated'

export const meta: MetaFunction = () => {
	return [{ title: 'Todos - アプリケーション名' }]
}

export const loader = async (args: LoaderFunctionArgs) => {
	const { id } = args.params
	if (!id) throw new Error('not found params id')

	const result = await getTodo({ client: todosApiClient, path: { id: Number(id) } })
	// TODO: エラー処理

	return { todo: result.data }
}

export default function Route() {
	const loaderData = useLoaderData<typeof loader>()

	return (
		<div className="container mx-auto">
			<h1>Todo</h1>
			<div>{JSON.stringify(loaderData.todo)}</div>
		</div>
	)
}
