import React, { ComponentProps, ReactElement } from 'react'

export type IconProps = {
	svg: ReactElement
} & ComponentProps<'svg'>

export const Icon: React.FC<IconProps> = ({ svg }) => {
	return <>{svg}</>
}
