import { createContext, useCallback, useEffect, useState } from 'react'
import { ThemeContextProps, ThemeContextProviderProps, ThemeProps } from './types'

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'dark',
	toggleTheme: () => null,
})

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<ThemeProps>('light')

	const toggleTheme = useCallback((newTheme: ThemeProps) => {
		const htmlElement = document.documentElement
		htmlElement.className = newTheme
		if (htmlElement.classList.length === 0) {
			return
		}
		setTheme(newTheme)
	}, [])

	useEffect(() => {
		toggleTheme(theme)
	}, [theme, toggleTheme])

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
