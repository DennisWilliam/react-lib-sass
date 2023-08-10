import { ThemeContext } from '@themes/contexts'
import { useContext } from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'

const Page = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div>
			<button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
				Toggle Theme
			</button>
		</div>
	)
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Page />}>
			<Route index path="/base-page-story" element={<Page />} />
		</Route>
	)
)

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
