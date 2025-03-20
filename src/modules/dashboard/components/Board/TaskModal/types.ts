import { Priority } from '@/services/entities/Task'

export type ModalProps = {
  open: boolean
  onClose: () => void
}

export type FormData = {
  clientId: string
  carPlate: string
}

export type Badges = {
  color: 'success' | 'info' | 'warning' | 'danger'
  priority: Priority
}[]
