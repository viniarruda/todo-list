import { Priority, Todo } from '@/services/entities/Todo'

export type CardProps = {
  todo: Todo
}

export type badgeColor = {
  [key in Priority]: 'success' | 'info' | 'warning' | 'danger'
}
