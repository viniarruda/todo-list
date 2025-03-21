import { TaskStatus } from '../Board'

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
  clientId: string
  client: {
    id: string
    name: string
    telephone: string
    taxId: string
  }
  carPlate: string
  description: string
  serviceOrders: string[]
  status: TaskStatus
  totalAmount: string
  userId: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}
