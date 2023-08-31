import mergeClass from 'classnames'
import { ComponentProps } from 'react'
import './_default.scss'

export const NavRoot: React.FC<ComponentProps<'nav'>> = (props) => {
	const clsMerged = mergeClass(props.className, 'nav')
	return (
		<nav className={clsMerged} {...props}>
			{props.children}
		</nav>
	)
}
