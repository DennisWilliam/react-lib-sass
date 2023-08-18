import { ComponentProps } from 'react'
import './_default.scss'

export type InputRootProps = {
	id: string
} & ComponentProps<'input'>

export const InputRoot: React.FC<InputRootProps> = (props) => {
	return <input className="input" {...props} />
}
