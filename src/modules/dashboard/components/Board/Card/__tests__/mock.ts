import { Priority, Todo } from '@/services/entities/Task'

export const todoMock: Todo = {
  id: '1',
  title: 'Todo 1',
  description: 'Description 1',
  createdAt: '2021-09-01T00:00:00.000Z',
  labels: [
    {
      id: '5',
      name: 'Label name',
      priority: Priority.High,
    },
  ],
}
