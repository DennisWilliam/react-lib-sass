import { LayoutLogin } from 'App'
import { Navigate, RouteObject } from 'react-router-dom'
import Login from '../pages/login'

export default function PublicRoutes(): RouteObject[] {
	return [
		//{ path: '/login', element: <Login /> },
		{
			element: <LayoutLogin />,
			path: '/login',
			children: [{ path: '/login', element: <Login /> }],
		},
		{ path: '*', element: <Navigate to="/login" replace /> },
	]
}
