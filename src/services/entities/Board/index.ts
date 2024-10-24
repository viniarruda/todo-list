import { Todo } from '@/services/entities/Todo'

export type Board = {
  id: string
  createdAt: string
  title: string
  description?: string
  todos?: Todo[]
}
