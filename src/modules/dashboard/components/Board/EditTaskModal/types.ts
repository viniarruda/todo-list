import { Priority } from '@/services/entities/Task'

export type ModalProps = {
  open: boolean
  onClose: () => void
  id: string
}

export type FormData = {
  serviceOrders: Array<{ order: string }>
  totalAmount: string
  description: string
  carPlate: string
}

export type Badges = {
  color: 'success' | 'info' | 'warning' | 'danger'
  priority: Priority
}[]
