import mergeClass from 'classnames'
import React from 'react'
import { Icon } from '../../icons'
import { ChevronDown } from '../../icons/chevron-down'
import { Download } from '../../icons/download'
import { ButtonRoot, ButtonRootProps } from './root'
import './variants/circle.scss'
import './variants/dropdown.scss'
import './variants/fill.scss'
import './variants/outline.scss'
import './variants/rounded.scss'

export type ButtonVariants = 'outline' | 'fill' | 'rounded' | 'circle' | 'button'

export type ButtonProps = {
	hideIcon?: boolean
	variant?: ButtonVariants
	icon?: React.ReactElement
} & ButtonRootProps

export const Button: React.FC<ButtonProps> = ({
	id,
	children,
	variant = 'rounded',
	className,
	loading,
	icon,
}) => {
	const clsMerged = mergeClass(className, variant, { loading: loading })

	return (
		<>
			<ButtonRoot id={id} className={clsMerged} loading={loading}>
				{icon && <Icon svg={icon} />}
				{children}
			</ButtonRoot>
		</>
	)
}

export const ButtonDropDown: React.FC<ButtonRootProps> = ({ id, children }) => {
	return (
		<>
			<ButtonRoot id={id} className="dropdown">
				<Icon svg={Download} />
				{children}
				<span className="toggle">
					<hr></hr>
					<Icon svg={ChevronDown} />
				</span>
			</ButtonRoot>
		</>
	)
}
