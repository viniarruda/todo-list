import { Column } from '@/services/entities/Board'
import { Priority } from '@/services/entities/Todo'

export type ModalProps = {
  open: boolean
  onClose: () => void
  id: string
  column: Column
}

export type FormData = {
  title: string
  labelName: string
  labelPriority: Priority | null
}

export type Badges = {
  color: 'success' | 'info' | 'warning' | 'danger'
  priority: Priority
}[]
