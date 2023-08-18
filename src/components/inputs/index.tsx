import React from 'react'
import { Icon } from '../../icons'
import { Search } from '../../icons/Search'
import { ButtonRoot } from '../buttons/root'
import { LabelRoot } from '../label/root'
import { InputRoot, InputRootProps } from './root'

import './variants/search.scss'

export type InputVariants = 'text' | 'password'

export type InputTextProps = {
	label?: string
	variants: InputVariants
} & InputRootProps

export const InputText: React.FC<InputTextProps> = ({ id, label, ...props }) => {
	return (
		<>
			<LabelRoot htmlFor={id}>{label}</LabelRoot>
			<InputRoot id={id} type="text" {...props} />
		</>
	)
}

export type InputSearchProps = {
	label?: string
	onSearch?: React.MouseEventHandler<HTMLButtonElement>
} & InputRootProps

export const InputSearch: React.FC<InputSearchProps> = ({
	id,
	label,
	onSearch = () => null,
	...props
}) => {
	return (
		<>
			<LabelRoot htmlFor={id}>{label}</LabelRoot>
			<div className="input-search-container">
				<InputRoot id={id} type="text" {...props} className="input-search" />
				<hr></hr>
				<ButtonRoot id={`${id}-btn`} onClick={onSearch} type="button">
					<Icon svg={Search} />
				</ButtonRoot>
			</div>
		</>
	)
}
