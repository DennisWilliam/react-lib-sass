import { Navigate } from 'react-router-dom'
import { Layout } from '../App'
import Home from '../pages/home'
import { UserRoutes } from '../pages/users'

export default function PrivateRoutes() {
	return {
		element: <Layout />,
		children: [
			UserRoutes,
			{
				path: '/home',
				element: <Home />,
			},
			{ path: '*', element: <Navigate to="/" replace /> },
		],
	}
}
