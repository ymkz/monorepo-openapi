import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: 'アプリケーション名' }]
}

export default function Route() {
	return (
		<div>
			<h1 className="text-2xl">動作確認用ページ</h1>
			<div>
				<a href="/todos">/todos</a>
			</div>
		</div>
	)
}
