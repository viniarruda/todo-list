import { p } from 'framer-motion/client'
import { array, object, string } from 'zod'

export const schema = () => {
  return object({
    carPlate: string({ required_error: 'Placa do carro é obrigatório' }).min(
      1,
      'Placa do carro é obrigatório',
    ),
    description: string(),
    serviceOrders: array(object({ order: string() })),
    totalAmount: string(),
  })
}
