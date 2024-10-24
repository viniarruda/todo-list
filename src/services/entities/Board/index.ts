import { Todo } from '@/services/entities/Todo'

export type Column = {
  title: string
  creatable: boolean
  done: boolean
  todos: Todo[]
}

export type Board = {
  id: string
  createdAt: string
  title: string
  description?: string
  columns?: Column[]
}
