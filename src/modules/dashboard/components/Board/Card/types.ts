import { Column } from '@/services/entities/Board'
import { Priority, Task } from '@/services/entities/Task'

export type CardProps = {
  todo?: Task
  index: number
  listIndex: number
  id: string
}

export type badgeColor = {
  [key in Priority]: 'success' | 'info' | 'warning' | 'danger'
}

export type DragItemProps = {
  type: string
  id: string
  index: number
  listIndex: number
}

export type UpdateBoardCardsOrder = {
  todos: Task[]
  destinationIndex: number
  sourceIndex: number
}

export type UpdateBoardColumns = {
  columns?: Column[]
  draggedListIndex: number
  targetListIndex: number
  sourceIndex: number
  destinationIndex: number
}
