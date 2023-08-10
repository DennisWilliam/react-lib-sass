export type TemplateDefaultProps = {
	id: string
}

const TemplateDefault: React.FC<TemplateDefaultProps> = ({ id }) => {
	return (
		<>
			<header></header>
			<nav></nav>
			<main></main>
			<aside></aside>
			<footer></footer>
		</>
	)
}

export default TemplateDefault
