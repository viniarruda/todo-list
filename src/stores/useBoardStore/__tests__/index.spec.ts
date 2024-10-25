import { act, renderHook } from '@testing-library/react'

import { useBoardStore } from '@/stores/useBoardStore'

describe('useBoardStore', () => {
  it('should save data correctly', () => {
    // Render the hook
    const { result } = renderHook(() => useBoardStore())

    // Save some data using the hook functions
    act(() => {
      result.current.saveNewBoard({
        id: '1',
        createdAt: '2021-09-01T00:00:00.000Z',
        title: 'Board 1',
        columns: [],
        description: 'Description 1',
      })
    })

    expect(result.current.board).toEqual({
      id: '1',
      createdAt: '2021-09-01T00:00:00.000Z',
      title: 'Board 1',
      columns: [],
      description: 'Description 1',
    })
  })

  it('should reset data correctly', () => {
    // Render the hook
    const { result } = renderHook(() => useBoardStore())

    // Save some data using the hook functions
    act(() => {
      result.current.saveNewBoard({
        id: '1',
        createdAt: '2021-09-01T00:00:00.000Z',
        title: 'Board 1',
        columns: [],
        description: 'Description 1',
      })

      result.current.reset()
    })

    expect(result.current.board).toBe(null)
  })
})
