import { Board } from '@/services/entities/Board'

export type State = {
  saveNewBoard: (board: Board) => void
  reset: () => void
  board: Board | null
}
