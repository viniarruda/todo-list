import { act, renderHook } from '@testing-library/react'

import { useUserStore } from '@/stores/useUserStore'

describe('useUserStore', () => {
  it('should save data correctly', () => {
    // Render the hook
    const { result } = renderHook(() => useUserStore())

    // Save some data using the hook functions
    act(() => {
      result.current.saveNewUser({
        id: '1',
        name: 'User 1',
        email: 'mail@test.com',
      })
    })

    expect(result.current.user).toEqual({
      id: '1',
      name: 'User 1',
      email: 'mail@test.com',
    })
  })

  it('should reset data correctly', () => {
    // Render the hook
    const { result } = renderHook(() => useUserStore())

    // Save some data using the hook functions
    act(() => {
      result.current.saveNewUser({
        id: '1',
        name: 'User 1',
        email: 'mail@test.com',
      })

      result.current.reset()
    })

    expect(result.current.user).toBe(null)
  })
})
