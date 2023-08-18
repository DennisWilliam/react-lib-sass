import { ComponentProps, ReactNode } from 'react'

export type ButtonRootProps = {
	id: string
	children?: ReactNode
	loading?: boolean
} & ComponentProps<'button'>

export const ButtonRoot: React.FC<ButtonRootProps> = ({ loading, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{loading ? <div className="spinner" /> : props.children}
		</button>
	)
}
