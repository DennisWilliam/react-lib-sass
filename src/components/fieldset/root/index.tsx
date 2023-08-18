import { ComponentProps, ReactNode } from 'react'
import './_default.scss'

export type FieldsetRootProps = {
	id: string
	legend?: string
	children?: ReactNode
} & ComponentProps<'fieldset'>

export const FieldsetRoot: React.FC<FieldsetRootProps> = ({ legend, children, ...props }) => {
	return (
		<fieldset className="fieldset" {...props}>
			{legend && <legend>{legend}</legend>}
			{children}
		</fieldset>
	)
}
