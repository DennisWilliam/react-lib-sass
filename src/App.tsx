import { ThemeContext } from '@themes/contexts'
import { useContext } from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import { Button, ButtonDropDown } from './components/buttons'
import { FieldsetRoot } from './components/fieldset/root'
import { InputSearch, InputText } from './components/inputs'
import { Select } from './components/select'
import { Star } from './icons/Star'

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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<PageSelect />}>
			<Route index path="/base-page-story" element={<Page />} />
			<Route index path="/base-input" element={<PageInput />} />
			<Route index path="/base-select" element={<PageSelect />} />
		</Route>
	)
)

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
