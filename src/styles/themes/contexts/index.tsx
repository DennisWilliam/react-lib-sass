import { ThemeApp } from '@themes/theme'
import { createContext, useState } from 'react'
import { CommonsTheme, DarkTheme } from '..'
import { ThemeContextProps, ThemeContextProviderProps, ThemeProps } from './types'

export const ThemeContext = createContext<ThemeContextProps>({
	theme: CommonsTheme,
	toggleTheme: () => null,
})

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<ThemeApp>(CommonsTheme)

	const toggleTheme = (newTheme: ThemeProps) => {
		switch (newTheme) {
			case 'Commons':
				return setTheme(CommonsTheme)
			case 'Dark':
				return setTheme({ ...DarkTheme })
			default:
				return setTheme(CommonsTheme)
		}
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
