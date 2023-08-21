import { SelectRoot, SelectRootProps } from './root'
import './variants/standard.scss'

export type SelectVariants = 'standard' | 'search'

export type SelectProps = {
	label?: string
	variants: SelectVariants
} & SelectRootProps

export const Select: React.FC<SelectProps> = ({ id, label, children, ...props }) => {
	return (
		<SelectRoot id={id} {...props}>
			{children}
		</SelectRoot>
	)
}
