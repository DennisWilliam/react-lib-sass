import { ComponentProps } from 'react'
import './_default.scss'

export const NavRoot: React.FC<ComponentProps<'nav'>> = (props) => {
	return <nav {...props}>{props.children}</nav>
}
