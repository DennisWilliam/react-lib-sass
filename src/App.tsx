/*import { zodResolver } from '@hookform/resolvers/zod'
import { ThemeContext } from '@themes/contexts'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'*/
import { Outlet } from 'react-router'
import { TemplateDefault, TemplateLogin } from 'templates/default'
/*import { z, ZodType } from 'zod'
import { Button, ButtonDropDown } from './components/buttons'
import { FieldsetRoot } from './components/fieldset/root'
import { InputDatepicker, InputSearch, InputText } from './components/inputs'
import { Select } from './components/select'
import { Star } from './icons/Star'
import TemplateDefault from './templates/default'
*/
/*
const op = [
	{ value: '1', label: 'teste 1' },
	{ value: '2', label: 'teste 2' },
	{ value: '3', label: 'teste 3' },
]

const Page = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',

				height: '100%',
			}}
		>
			<Button id="btn-default" variant="button">
				default
			</Button>
			<Button id="btn-fill" variant="fill">
				fill
			</Button>
			<Button id="btn-outline" variant="outline">
				outline
			</Button>
			<Button id="btn-rounded" variant="rounded">
				Rounded
			</Button>
			<Button id="btn-circle" variant="circle">
				C
			</Button>
			<ButtonDropDown id="dropdown">Teste</ButtonDropDown>
			<button onClick={() => toggleTheme(theme === 'orange' ? 'dark' : 'orange')}>
				Toggle Theme
			</button>
		</div>
	)
}

const PageInput = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
			}}
		>
			<form action="#" method="post">
				<FieldsetRoot id="fieldset1" legend="Form 1">
					<InputText id="input" variants="text" label="Titulo:" placeholder="Digite aqui" />
					<InputText id="input2" variants="text" label="Titulo:" placeholder="Digite aqui" />
					<InputSearch id="search" label="Procurar:" placeholder="Digite aqui" />
					<InputSearch id="search2" label="Procurar:" placeholder="Digite aqui" />
					<Button id="btn" variant="fill" type="submit" icon={Star} loading className="teste">
						fill
					</Button>
				</FieldsetRoot>
			</form>

			<button onClick={() => toggleTheme(theme === 'orange' ? 'dark' : 'orange')}>
				Toggle Theme
			</button>
		</div>
	)
}

const PageSelect = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
			}}
		>
			<form action="#" method="post">
				<FieldsetRoot id="fieldset1" legend="Form 1">
					<Select id="select" variants="search" options={op} />
					<Select id="select" variants="search" options={op} />

					<Button id="btn" variant="fill" type="submit" icon={Star} loading className="teste">
						fill
					</Button>
				</FieldsetRoot>
			</form>

			<button onClick={() => toggleTheme(theme === 'orange' ? 'dark' : 'orange')}>
				Toggle Theme
			</button>
		</div>
	)
}

const PageDatepicker = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
			}}
		>
			<form action="#" method="post">
				<FieldsetRoot id="fieldset1" legend="Form 1">
					<InputDatepicker id="datepicker2" />
					<InputDatepicker id="datepicker3" />
				</FieldsetRoot>
			</form>

			<button onClick={() => toggleTheme(theme === 'orange' ? 'dark' : 'orange')}>
				Toggle Theme
			</button>
		</div>
	)
}

const PageLayout = () => {
	type FormType = {
		name: string
		lastName: string
		email: string
		select: number
		date: Date
	}

	const formSchema: ZodType<FormType> = z
		.object({
			name: z.string().min(2).max(30),
			lastName: z.string(),
			email: z.string(),
			select: z.number(),
			date: z.date(),
		})
		.refine((objeto) => objeto.name === objeto.lastName, {
			message: 'Informação incorreta',
			path: ['name'],
		})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormType>({ resolver: zodResolver(formSchema) })

	const submit = (data: FormType) => {
		console.log(data)
	}

	return (
		<TemplateDefault id="template">
			<form onSubmit={handleSubmit(submit)}>
				<FieldsetRoot id="fieldset1" legend="Form 1">
					<InputText
						id="input"
						variants="text"
						label="Nome:"
						placeholder="Digite aqui"
						{...register('name')}
					/>
					{errors.name && <span>Error</span>}
					<InputSearch id="search" label="Procurar:" placeholder="Digite aqui" />
					<Select id="select" variants="search" options={op} label="Selecione:" />
					<InputDatepicker id="datepicker2" label="Data:" />
				</FieldsetRoot>
				<Button id="btn-fill" variant="fill">
					fill
				</Button>
			</form>
		</TemplateDefault>
	)
}
*/
const Layout = () => {
	return (
		<>
			<TemplateDefault id="template">
				<Outlet />
			</TemplateDefault>
		</>
	)
}

const LayoutLogin = () => {
	return (
		<>
			<TemplateLogin id="template">
				<Outlet />
			</TemplateLogin>
		</>
	)
}

export { Layout, LayoutLogin }
