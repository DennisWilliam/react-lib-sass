import { NavRoot } from 'components/nav/root'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import './_default.scss'

export const Menus: React.FC<ComponentProps<'nav'>> = (props) => {
	return (
		<NavRoot id="nav-menu">
			<ul className="menu">
				<li className="home">
					<Link to={'/home'}>Home</Link>
				</li>
				<li className="menu-item">
					<span>Configurações</span>
					<ul className="submenu">
						<li className="menu-link">
							<Link to={'/users/result'}>Usuários</Link>
						</li>
					</ul>
				</li>
			</ul>
		</NavRoot>
	)
}
