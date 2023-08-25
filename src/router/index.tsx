import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Login from '../pages/login'
import { UserRoutes } from '../pages/users'

/*
export const routers = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/home',
		element: <Home />,
	},
])
*/

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>Erro</div>,
		children: [
			UserRoutes,
			{
				path: '/home',
				element: <Home />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
])
