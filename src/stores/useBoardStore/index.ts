import { create } from 'zustand'

import { Board } from '@/services/entities/Board'
import { State } from './types'

export const useBoardStore = create<State>(set => {
  const saveNewBoard = (board: Board) => {
    set({ board })
  }

  const reset = () => {
    set({
      board: null,
    })
  }

  return {
    saveNewBoard,
    reset,
    board: null,
  }
})
