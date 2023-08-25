import { useState } from 'react'

type User = {
	name: string
	email: string
	active: boolean
	profile: string[]
}

type AuthUser = {
	user: User | undefined
	isAuthenticated: boolean
	login: () => void
	logout: () => void
	token: string | undefined
}

const useAuth = (): AuthUser => {
	const [user, setUser] = useState<User | undefined>(undefined)
	const [token, setToken] = useState<string | undefined>(undefined)
	const isAuthenticated = !!user

	const login = () => {
		//TODO: Implementar funcionalidade de login
		setUser({
			name: 'default',
			email: 'default@teste.com.br',
			active: true,
			profile: ['1', '2', '3'],
		})
		setToken(
			'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
		)
	}

	const logout = () => {
		//TODO: Implementar funcionalidade de logout
		setUser(undefined)
		setToken(undefined)
	}

	return {
		user,
		isAuthenticated,
		login,
		logout,
		token,
	}
}

export default useAuth
