import { Outlet } from '@remix-run/react'

export default function Layout() {
	return (
		<div className="isolate flex flex-col min-h-dvh">
			<header className="h-16">header</header>
			<main className="grow p-8">
				<Outlet />
			</main>
			<footer className="h-16">footer</footer>
		</div>
	)
}
