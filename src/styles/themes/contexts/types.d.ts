export type ThemeProps = 'light' | 'dark' | 'orange'

export type ThemeContextProps = {
	theme: ThemeProps
	toggleTheme: (newTheme: ThemeProps) => newTheme
}

export type ThemeContextProviderProps = {
	children: React.ReactNode
}
