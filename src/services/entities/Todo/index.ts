export enum Priority {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
}

type Label = {
  id: string
  name: string
  priority: Priority
}

export enum Status {
  Backlog = 'BACKLOG',
  Todo = 'TODO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export type Todo = {
  id: string
  createdAt: string
  title: string
  description?: string
  labels?: Label[]
  status: Status
}
