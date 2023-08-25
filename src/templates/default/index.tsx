import React, { useEffect } from 'react'
import './variants/_default.scss'
import './variants/commons.scss'
import './variants/layout.scss'
import './variants/layout2.scss'
import './variants/layout3.scss'
import './variants/login.scss'

export type TemplateDefaultProps = {
	id: string
	children: React.ReactElement
}

const TemplateDefault: React.FC<TemplateDefaultProps> = ({ id, children }) => {
	useEffect(() => {
		const root = document.getElementById('root')
		root?.classList.add('commons')
	}, [])

	const classNames = 'template-item'
	return (
		<>
			<header className={classNames}>Header</header>
			<main className={classNames}>{children}</main>
			<nav className={classNames}>Nav</nav>
			<aside className={classNames}>Aside</aside>
			<footer className={classNames}>Footer</footer>
		</>
	)
}

const TemplateLogin: React.FC<TemplateDefaultProps> = ({ id, children }) => {
	useEffect(() => {
		const root = document.getElementById('root')
		root?.classList.add('login-layout')
	}, [])

	const classNames = 'template-item'
	return (
		<>
			<header className={classNames}>Header</header>
			<main className={classNames}>{children}</main>
			<footer className={classNames}>Footer</footer>
		</>
	)
}

const TemplateLogo: React.FC<TemplateDefaultProps> = ({ id }) => {
	useEffect(() => {
		const root = document.getElementById('root')
		root?.classList.add('layout-logo')
	}, [])

	const classNames = 'template-item'
	return (
		<>
			<header className={classNames}>
				<a href="#" id="logo">
					Logo
				</a>
				<button id="open-menu">&#9776;</button>
				<nav className={classNames}>
					<button id="close-menu">X</button>
					<a href="#">Menu 1</a>
					<a href="#">Menu 2</a>
					<a href="#">Menu 3</a>
					<a href="#">Menu 4</a>
					<a href="#">Menu 5</a>
				</nav>
			</header>

			<main className={classNames}>
				<section>section</section>
			</main>
			<aside className={classNames}>Aside</aside>
			<footer className={classNames}>Footer</footer>
		</>
	)
}

export { TemplateDefault, TemplateLogin, TemplateLogo }
