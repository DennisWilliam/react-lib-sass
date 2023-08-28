import { useState } from 'react'
import { useMockRequest } from './useMockRequest'

type User = {
	name: string
	email: string
	active: boolean
	profile: string[]
}

type AuthUser = {
	user: User | undefined
	isAuthenticated: boolean
	login: () => Promise<unknown>
	logout: () => Promise<unknown>
	token: string | undefined
}

const useAuth = (): AuthUser => {
	const [user, setUser] = useState<User | undefined>(undefined)
	const [token, setToken] = useState<string | undefined>(undefined)
	//const isAuthenticated = !!user
	const isAuthenticated = true
	const { requestPromise } = useMockRequest()

	const login = () => {
		//TODO: Implementar funcionalidade de login
		return requestPromise(() => {
			setUser({
				name: 'default',
				email: 'default@teste.com.br',
				active: true,
				profile: ['1', '2', '3'],
			})
			setToken(
				'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
			)
		})
		/*
		const requestPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				const sucesso = true
				if (sucesso) {
					setUser({
						name: 'default',
						email: 'default@teste.com.br',
						active: true,
						profile: ['1', '2', '3'],
					})
					setToken(
						'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
					)
					resolve('OK')
				}
				reject('Erro')
			}, 2000)
		})

		return requestPromise
		*/
		/*
		new Promise()
			.then(() => {
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
			})
			.catch((error) => {
				console.log(error)
			})*/
	}

	const logout = () => {
		//TODO: Implementar funcionalidade de logout

		return requestPromise(() => {
			setUser(undefined)
			setToken(undefined)
		})
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
