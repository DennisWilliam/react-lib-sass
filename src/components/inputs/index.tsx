import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Icon } from '../../icons'
import { Search } from '../../icons/Search'
import { ButtonRoot } from '../buttons/root'
import { LabelRoot } from '../label/root'
import { InputRoot, InputRootProps } from './root'

import 'react-datepicker/dist/react-datepicker.css'
import './variants/datepicker.scss'
import './variants/search.scss'

export type InputVariants = 'text' | 'password'

export type InputTextProps = {
	label?: string
	variants: InputVariants
} & InputRootProps

export type InputDatepickerProps = {
	label?: string
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

export const InputDatepicker: React.FC<InputDatepickerProps> = ({ className, ...props }) => {
	const [startDate, setStartDate] = useState(new Date())
	return (
		<DatePicker
			className="datepicker"
			selected={startDate}
			onChange={(date: Date) => setStartDate(date)}
		/>
	)
}
