import { ThemeApp } from '@themes/theme'

export type ThemeProps = 'Commons' | 'Chipcentre' | 'CaSigner' | 'AtmCentre' | 'PayAdmin' | 'Dark'

export type ThemeContextProps = {
	theme: ThemeApp
	toggleTheme: (newTheme: ThemeProps) => newTheme
}

export type ThemeContextProviderProps = {
	children: React.ReactNode
}
