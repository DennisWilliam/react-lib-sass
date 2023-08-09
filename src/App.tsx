import { ThemeContext } from '@themes/contexts'
import { ThemeContextProps } from '@themes/contexts/types'
import { useContext } from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'

import Global from './styles/global'

const Page = () => {
	return <div>teste2</div>
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Page />}>
			<Route index path="/base-page-story" element={<Page />} />
		</Route>
	)
)

const App = () => {
	const { theme } = useContext<ThemeContextProps>(ThemeContext)
	return (
		<>
			<Global theme={theme} />
			<RouterProvider router={router} />
		</>
	)
}

export default App
