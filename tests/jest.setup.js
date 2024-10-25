import '@testing-library/jest-dom'

jest.mock('react-dnd', () => ({
  useDrag: jest.fn(),
  useDrop: jest.fn(),
  DndProvider: jest.fn(),
}))
jest.mock('react-dnd-html5-backend', () => ({
  HTML5Backend: jest.fn(),
}))

jest.mock('@/services/constants', () => ({
  baseUrl: 'http://localhost.com',
  routes: {
    signIn: '/login',
    todoList: '/todoList',
    todo: jest.fn(() => '/todoList/123'),
  },
}))
