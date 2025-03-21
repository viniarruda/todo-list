import { Task } from '@/services/entities/Task'

export type CreateTaskData = Task

export type CreateTaskParams = {
  clientId: string
  carPlate: string
  description: string
}
