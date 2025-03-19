import { Home } from '@/modules/dashboard/screens/Home'
import { render, screen } from '@tests/utils/render'

import { routes } from '@/utils/routes'
import userEvent from '@testing-library/user-event'

import { useBoardList } from '@/services/task/queries/useTaskList'
import { responseMock } from './mock'

const pushMock = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: pushMock,
  })),
}))

jest.mock('@/services/todo/queries/useTodoList', () => ({
  useBoardList: jest.fn(() => ({
    data: undefined,
    isLoading: false,
  })),
}))

const useBoardListMock = useBoardList as jest.Mock

describe('Dashboard home', () => {
  describe('when screen render', () => {
    it('should render correctly', () => {
      const { container } = render(<Home />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('when click to Go to Board', () => {
    it('should navigate to board', async () => {
      useBoardListMock.mockReturnValue({
        data: responseMock,
        isLoading: false,
      })

      render(<Home />)

      const button = screen.getByText('Go to Board')

      await userEvent.click(button)

      expect(pushMock).toHaveBeenCalledWith(routes.DASHBOARD_TODO_LISTS('123'))
    })
  })
})
