export type ThemeProps = 'light' | 'dark'

export type ThemeContextProps = {
	theme: ThemeProps
	toggleTheme: (newTheme: ThemeProps) => newTheme
}

export type ThemeContextProviderProps = {
	children: React.ReactNode
}
