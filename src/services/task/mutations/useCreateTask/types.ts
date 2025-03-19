import { TaskStatus } from '@/services/entities/Board'
import { Task } from '@/services/entities/Task'

export type CreateTaskData = Task

export type CreateTaskParams = {
  id: string
  status: TaskStatus
  clientId: string
}
