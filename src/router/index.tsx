import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import PrivateRoutes from './private'
import PublicRoutes from './public'

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
/*
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

*/

export const CustomRouterProvider = () => {
	const { isAuthenticated } = useAuth()
	const routers = createBrowserRouter([isAuthenticated ? PrivateRoutes() : {}, ...PublicRoutes()])

	return <RouterProvider router={routers} />
}

//export const routers = createBrowserRouter([true ? PrivateRoutes() : {}, ...PublicRoutes()])
