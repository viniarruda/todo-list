import { Priority } from '@/services/entities/Todo'
import { Badges, FormData } from './types'

export const defaultValues: FormData = {
  title: '',
  labelName: '',
  labelPriority: '',
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
