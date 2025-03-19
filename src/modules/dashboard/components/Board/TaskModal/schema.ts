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
    carPlate: string({ required_error: 'Placa do carro é obrigatório' }).min(
      1,
      'Placa do carro é obrigatório',
    ),
    taxId: string({ required_error: 'CPF/CNPJ é obrigatório' }).min(
      1,
      'CPF/CNPJ é obrigatório',
    ),
    // labelPriority: string({ required_error: 'Label priority is required' }).min(
    //   1,
    //   'Label priority is required',
    // ),
  })
}
