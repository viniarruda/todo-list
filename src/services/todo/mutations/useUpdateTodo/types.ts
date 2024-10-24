import { Board } from '@/services/entities/Board'

export type UpdateBoardData = Board

export type UpdateBoardParams = {
  id: string
} & Partial<Board>
