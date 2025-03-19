import { Priority } from '@/services/entities/Task'

import { BoardData, BoardParams } from '@/services/task/queries/useTodo/types'

export const todoMock: BoardData = {
  id: '1',
  title: 'Todo 1',
  description: 'Description 1',
  createdAt: '2021-09-01T00:00:00.000Z',
  columns: [
    {
      title: 'Column 1',
      creatable: true,
      done: false,
      todos: [
        {
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
        },
      ],
    },
  ],
}

export const paramsMock: BoardParams = {
  id: '123',
}
