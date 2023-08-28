import useAuth from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const Login = () => {
	const { login, isAuthenticated } = useAuth()
	const navigate = useNavigate()

	function doLogin() {
		login().then(() => {
			if (isAuthenticated) navigate('/home')
		})
	}

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
				<button type="button" onClick={doLogin}>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
