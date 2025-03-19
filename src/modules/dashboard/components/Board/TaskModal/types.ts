import { Column } from '@/services/entities/Board'
import { Priority } from '@/services/entities/Task'

export type ModalProps = {
  open: boolean
  onClose: () => void
  id?: string
  isEditing?: boolean
}

export type FormData = {
  clientId: string
  carPlate: string
  // labelName: string
  // labelPriority: Priority | ''
}

export type Badges = {
  color: 'success' | 'info' | 'warning' | 'danger'
  priority: Priority
}[]
