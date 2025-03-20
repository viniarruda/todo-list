import { Task } from '@/services/entities/Task'
import { FormData } from './types'

export const defaultValues: FormData = {
  description: '',
  serviceOrders: [{ order: '' }],
  totalAmount: '',
  carPlate: '',
}

export const buildDefaultValues = (data?: Task): FormData => {
  return {
    description: data?.description ?? defaultValues.description,
    serviceOrders:
      Array.isArray(data?.serviceOrders) && data?.serviceOrders.length > 0
        ? data.serviceOrders.map(order => ({ order }))
        : [{ order: '' }],
    totalAmount: data?.totalAmount ?? defaultValues.totalAmount,
    carPlate: data?.carPlate ?? defaultValues.carPlate,
  }
}
