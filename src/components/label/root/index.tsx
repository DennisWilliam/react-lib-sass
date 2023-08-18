import { ComponentProps } from 'react'
import './_default.scss'

export const LabelRoot: React.FC<ComponentProps<'label'>> = (props) => {
	return (
		<label className="label" {...props}>
			{props.children}
		</label>
	)
}
