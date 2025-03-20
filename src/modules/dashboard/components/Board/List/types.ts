import { Column } from '@/services/entities/Board'

export type ListProps = {
  column: Column
  columns: Column[]
  listIndex: number
  id: string
}
