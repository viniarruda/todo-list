export enum Priority {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
}

export type Label = {
  id: string
  name: string
  priority: Priority
}

export type Task = {
  id: string
  createdAt: string
  title: string
  description?: string
  labels?: Label[]
}
