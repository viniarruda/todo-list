import { p } from 'framer-motion/client'
import { object, string } from 'zod'

export const schema = () => {
  return object({
    name: string({ required_error: 'Nome é obrigatório' }).min(
      1,
      'Nome é obrigatório',
    ),
    phone: string({ required_error: 'Telefone é obrigatório' }).min(
      1,
      'Telefone é obrigatório',
    ),
    taxId: string({ required_error: 'CPF/CNPJ é obrigatório' }).min(
      1,
      'CPF/CNPJ é obrigatório',
    ),
  })
}
