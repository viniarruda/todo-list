import nock from 'nock'

import { routes } from '@/services/constants'
import { useBoard } from '@/services/task/queries/useTodo'

import { renderHook } from '@tests/utils/customRenderHook'
import { API_URL_MOCK, waitFor } from '@tests/utils/render'
import { paramsMock, todoMock } from './mock'

describe('useBoard', () => {
  describe('when do the request ', () => {
    it('should return response', async () => {
      nock(API_URL_MOCK).get(routes.todo(paramsMock.id)).reply(200, todoMock)

      const { result } = renderHook(() => useBoard(paramsMock))

      await waitFor(() => expect(result.current.isSuccess).toBe(true))

      expect(result.current.data).toEqual(todoMock)
    })
  })
})
