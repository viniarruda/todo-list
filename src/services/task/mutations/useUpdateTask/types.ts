import { Board, TaskStatus } from '@/services/entities/Board'

export type UpdateTaskData = Board

export type UpdateTaskParams = {
  id: string
  status?: TaskStatus
  serviceOrders?: string[]
  totalAmount?: number
  description?: string
  carPlate?: string
  taxId?: string
  phone?: string
  name?: string
}
