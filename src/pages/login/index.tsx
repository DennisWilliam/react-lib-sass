import useAuth from 'hooks/useAuth'
import { Navigate } from 'react-router'
import './style.scss'
const Login = () => {
	const { login } = useAuth()

	return (
		<div className="login-box">
			<form>
				<fieldset>
					<label htmlFor="login">Login:</label>
					<input id="login" type="text" />
					<label htmlFor="password">Password:</label>
					<input id="password" type="password" />
					<label htmlFor="token">Token:</label>
					<input id="token" type="password" />
				</fieldset>
				<button
					type="button"
					onClick={() => {
						login()
						Navigate({ to: '/home' })
					}}
				>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
