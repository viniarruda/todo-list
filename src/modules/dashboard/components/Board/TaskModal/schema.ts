import { p } from 'framer-motion/client'
import { object, string } from 'zod'

export const schema = () => {
  return object({
    clientId: string({ required_error: 'Cliente é obrigatório' }).min(
      1,
      'Cliente é obrigatório',
    ),
    carPlate: string({ required_error: 'Placa do carro é obrigatório' }).min(
      1,
      'Placa do carro é obrigatório',
    ),
  })
}
