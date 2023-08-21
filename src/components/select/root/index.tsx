import { ComponentProps, KeyboardEvent, MouseEvent, useState } from 'react'
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

	function handleCLick(e: MouseEvent<HTMLLIElement>) {
		setSelected({
			label: e.currentTarget.textContent || '',
			value: e.currentTarget.dataset.value || '-1',
		})
		setIsOpen(false)
	}

	function handleKeydown(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter' || e.key === ' ') {
			setIsOpen(!isOpen)
		}
	}

	function handleKeydownOption(e: KeyboardEvent<HTMLLIElement>) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.currentTarget.click()
		}
	}

	return (
		<div className="ancor">
			<div className="container">
				<select className="select" {...props} value={selected.value}>
					{options.map((op) => {
						return (
							<option key={op.value} value={op.value}>
								{op.label}
							</option>
						)
					})}
				</select>
				<input
					className="select"
					onClick={() => setIsOpen(!isOpen)}
					value={selected.label}
					placeholder="Selecione um item"
					onKeyDown={handleKeydown}
				/>

				<ul className={classOptions}>
					{options.map((op) => {
						return (
							<li
								tabIndex={0}
								data-value={op.value}
								key={op.value}
								className="option"
								onClick={handleCLick}
								onKeyDown={handleKeydownOption}
							>
								{op.label}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
