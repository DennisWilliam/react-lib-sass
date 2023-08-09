type ThemeInteractions = {
	hover_and_selection: string
	hover_and_selection_primary: string
	hover_and_selection_secondary: string
	disable: string
	disable_text: string
}

export type ThemeApp = {
	header: string
	primary: string
	secondary: string
	background: string
	primary_text: string
	primary_background_text: string
	secondary_text: string
	tertiary_text: string
	quaternary_text: string
	input_color: string
	transparent: 'transparent'
} & ThemeInteractions
