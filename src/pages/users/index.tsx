import { Outlet, RouteObject } from 'react-router-dom'
import Insert from './insert'
import Result from './result'
import Update from './update'

const Users = () => {
	return (
		<div>
			<span>Users</span>
			<Outlet />
		</div>
	)
}

export const UserRoutes: RouteObject = {
	path: '/users',
	element: <Users />,
	children: [
		{
			path: '/users/result',
			element: <Result />,
		},
		{
			path: '/users/insert',
			element: <Insert />,
		},
		{
			path: '/users/update',
			element: <Update />,
		},
	],
}

export { Insert, Result, Update, Users }
