import { LabelRoot } from '../label/root'
import { SelectRoot, SelectRootProps } from './root'
import './variants/standard.scss'

export type SelectVariants = 'standard' | 'search'

export type SelectProps = {
	label?: string
	variants: SelectVariants
} & SelectRootProps

export const Select: React.FC<SelectProps> = ({ id, label, children, ...props }) => {
	return (
		<>
			<LabelRoot htmlFor={id}>{label}</LabelRoot>
			<SelectRoot id={id} {...props}>
				{children}
			</SelectRoot>
		</>
	)
}
