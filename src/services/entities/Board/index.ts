import { Todo } from '@/services/entities/Todo'

export enum TaskStatus {
  Registered = 'REGISTERED',
  OnBudget = 'ON_BUDGET',
  BudgetCompleted = 'BUDGET_COMPLETED',
  WaitingConfirmation = 'WAITING_CONFIRMATION',
  WaitingPayment = 'WAITING_PAYMENT',
  InProgress = 'IN_PROGRESS',
  ServiceCompleted = 'SERVICE_COMPLETED',
}

export type Column = {
  title: string
  creatable: boolean
  done: boolean
  todos: Todo[]
  taskStatus: TaskStatus
}

export type Board = {
  id: string
  createdAt: string
  title: string
  description?: string
  columns?: Column[]
}
