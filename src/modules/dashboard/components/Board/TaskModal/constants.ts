import { Priority } from '@/services/entities/Task'
import { Badges, FormData } from './types'

export const defaultValues: FormData = {
  clientId: '',
  carPlate: '',
  description: '',
}

export const badges: Badges = [
  {
    color: 'info',
    priority: Priority.Low,
  },
  {
    color: 'warning',
    priority: Priority.Medium,
  },
  {
    color: 'danger',
    priority: Priority.High,
  },
]
