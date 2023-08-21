import { ComponentProps, MouseEvent, useState } from 'react'
import './_default.scss'

export type SelectOption = {
	label: string | number
	value: string | number
}

export type SelectRootProps = {
	id: string
	options: SelectOption[]
} & ComponentProps<'select'>

export const SelectRoot: React.FC<SelectRootProps> = ({ options = [], children, ...props }) => {
	const [selected, setSelected] = useState<SelectOption>({ label: '', value: '-1' })
	const [isOpen, setIsOpen] = useState(false)
	const classOptions = isOpen ? 'options' : ['options', 'collapse'].join(' ')

	function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setSelected({
			label: e.target.selectedOptions[0].label,
			value: e.target.selectedOptions[0].value,
		})
	}

	function handleCLick(e: MouseEvent<HTMLLIElement>) {
		setSelected({
			label: e.currentTarget.textContent || '',
			value: e.currentTarget.dataset.value || '-1',
		})
		setIsOpen(false)
		//console.log(e.currentTarget.dataset.value)
	}

	return (
		<div className="ancor">
			<div className="container">
				<select
					className="select"
					{...props}
					value={selected.value}
					onChange={(e) => handleOnChange(e)}
				>
					{options.map((op) => {
						return (
							<option key={op.value} value={op.value}>
								{op.label}
							</option>
						)
					})}
				</select>
				<span className="select" onClick={() => setIsOpen(!isOpen)}>
					{selected.label}
				</span>
				<ul className={classOptions}>
					{options.map((op) => {
						return (
							<li data-value={op.value} key={op.value} className="option" onClick={handleCLick}>
								{op.label}
							</li>
						)
					})}
				</ul>
				{/*<div className="options">
				{options.map((op) => {
					return (
						<div key={op.value} className="option">
							{op.label}
						</div>
					)
				})}
			</div>*/}
			</div>
		</div>
	)
}
