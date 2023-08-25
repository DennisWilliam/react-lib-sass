import ThemeContextProvider from '@themes/contexts'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<RouterProvider router={routers} />
		</ThemeContextProvider>
	</React.StrictMode>
)
