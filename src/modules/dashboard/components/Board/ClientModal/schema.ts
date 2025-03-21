import { object, string } from 'zod'

export const schema = () => {
  return object({
    name: string({ required_error: 'Nome é obrigatório' }).min(
      1,
      'Nome é obrigatório',
    ),
    // For phone and taxId, we'll just check that they're not empty
    // The actual validation will happen at submission time using the state values
    phone: string().nonempty('Telefone é obrigatório'),
    taxId: string().nonempty('CPF/CNPJ é obrigatório'),
  })
}
