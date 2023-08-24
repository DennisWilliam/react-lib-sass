import { z } from 'zod'

export const PersonSchema = z.object({
	name: z.string(),
	email: z.string(),
})

export type Person = z.infer<typeof PersonSchema>

// Evita que atributos que não estão no schema passem para o objeto retornado
export const result = PersonSchema.safeParse({
	name: 'Teste',
	email: 'teste@teste.com.br',
	outro: 'teste',
})

// Retorna uma exception caso o objeto não atenda os tipos do schema
export const result2 = PersonSchema.parse({
	name: 'Teste',
	email: 'teste@teste.com.br',
	outro: 'teste',
})
