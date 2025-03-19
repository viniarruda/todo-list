import { Column } from '@/services/entities/Board'
import { Priority } from '@/services/entities/Task'

export type ModalProps = {
  open: boolean
  onClose: () => void
  id: string
  column: Column
}

export type FormData = {
  name: string
  phone: string
  carPlate: string
  taxId: string
  // labelName: string
  // labelPriority: Priority | ''
}

export type Badges = {
  color: 'success' | 'info' | 'warning' | 'danger'
  priority: Priority
}[]
