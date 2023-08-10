import ThemeContextProvider from '@themes/contexts'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</React.StrictMode>
)
