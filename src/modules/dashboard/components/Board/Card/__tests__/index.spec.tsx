import { Card } from '@/modules/dashboard/components/Board/Card'

import { render, screen } from '@tests/utils/render'

import { todoMock } from './mock'

jest.mock('@/services/todo/mutations/useUpdateTodo', () => ({
  useUpdateTodo: jest.fn(() => ({
    mutate: jest.fn(),
    isLoading: false,
  })),
}))

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: jest.fn(() => ({
    invalidateQueries: jest.fn(),
  })),
}))

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    refresh: jest.fn(),
  })),
}))

const mockDragRef = jest.fn(ref => ref) // Simulate `dragRef`
const mockDropRef = jest.fn(ref => ref) // Simulate `dropRef`

jest.mock('react-dnd', () => ({
  useDrag: jest.fn(() => [{ isDragging: false }, mockDragRef]),
  useDrop: jest.fn(() => [null, mockDropRef]), // Mock `dropRef` correctly
}))

describe('Card', () => {
  describe('when the component render', () => {
    it('should render correctly', () => {
      const { container } = render(<Card id="1" index={1} listIndex={0} />)

      expect(container).toBeDefined()
    })
  })

  describe('when receive the todo', () => {
    it('should render the todo', async () => {
      render(<Card id="1" index={1} listIndex={0} todo={todoMock} />)

      const title = await screen.findByText('Todo 1')
      const labelName = await screen.findByText('Label name')

      expect(title).toBeInTheDocument()
      expect(labelName).toBeInTheDocument()
    })
  })
})
