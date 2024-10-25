import {
  updateBoardCardsOrder,
  updateBoardColumns,
} from '@/modules/dashboard/components/Board/Card/utils'

import { Column } from '@/services/entities/Board'

describe('Card utils', () => {
  describe('updateBoardCardsOrder', () => {
    it('should reorder todos within the same column', () => {
      const todos = [
        { id: '1', createdAt: '', title: 'First Todo' },
        { id: '2', createdAt: '', title: 'Second Todo' },
        { id: '3', createdAt: '', title: 'Third Todo' },
      ]

      const result = updateBoardCardsOrder({
        todos,
        sourceIndex: 0,
        destinationIndex: 2,
      })

      expect(result).toEqual([
        { id: '2', createdAt: '', title: 'Second Todo' },
        { id: '3', createdAt: '', title: 'Third Todo' },
        { id: '1', createdAt: '', title: 'First Todo' },
      ])
    })

    it('should return the same array if source and destination are the same', () => {
      const todos = [{ id: '1', createdAt: '', title: 'First Todo' }]

      const result = updateBoardCardsOrder({
        todos,
        sourceIndex: 0,
        destinationIndex: 0,
      })

      expect(result).toEqual(todos)
    })
  })

  describe('updateBoardColumns', () => {
    it('should reorder todos within the same column', () => {
      const columns: Column[] = [
        {
          creatable: true,
          done: false,
          title: 'Backlog',
          todos: [
            { id: '1', createdAt: '', title: 'First Todo' },
            { id: '2', createdAt: '', title: 'Second Todo' },
          ],
        },
      ]

      const result = updateBoardColumns({
        columns,
        draggedListIndex: 0,
        targetListIndex: 0,
        sourceIndex: 0,
        destinationIndex: 1,
      })

      expect(result[0].todos).toEqual([
        { id: '2', createdAt: '', title: 'Second Todo' },
        { id: '1', createdAt: '', title: 'First Todo' },
      ])
    })

    it('should move a todo across different columns', () => {
      const columns: Column[] = [
        {
          title: 'Backlog',
          creatable: true,
          done: false,
          todos: [{ id: '1', createdAt: '', title: 'First Todo' }],
        },
        {
          title: 'In Progress',
          todos: [],
          creatable: false,
          done: false,
        },
      ]

      const result = updateBoardColumns({
        columns,
        draggedListIndex: 0,
        targetListIndex: 1,
        sourceIndex: 0,
        destinationIndex: 0,
      })

      expect(result[0].todos).toEqual([])
      expect(result[1].todos).toEqual([
        { id: '1', createdAt: '', title: 'First Todo' },
      ])
    })
  })
})
