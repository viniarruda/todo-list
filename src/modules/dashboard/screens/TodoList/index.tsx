'use client'

import { Flex, Title, Typography } from '@/design-system/components'
import { useBoard } from '@/services/todo/queries/useTodo'
import { createUseBoardKey } from '@/services/todo/queries/useTodo/key'

import { List } from '@/modules/dashboard/components/Board/List'
import { Board } from '@/modules/dashboard/components/Board/styles'

import { useBoardStore } from '@/stores/useBoardStore'
import { useEffect } from 'react'
import { TodoListScreenProps } from './types'

export const TodoListScreen = ({ id }: TodoListScreenProps) => {
  const saveNewBoard = useBoardStore(state => state.saveNewBoard)

  const { data, isLoading } = useBoard({
    id,
  })

  useEffect(() => {
    if (data) {
      saveNewBoard(data)
    }
  }, [data])

  return (
    <Flex direction="column" width="full">
      <Title>Todo List</Title>
      {isLoading && <Flex>Loading...</Flex>}

      {data && (
        <Flex direction="column" width="full" height="full" color="inverse">
          <Flex direction="column" align="center">
            <Typography fontSize="5xl" color="textPrimary">
              {data.title}
            </Typography>
            <Typography fontSize="3xl" fontWeight="light" color="textPrimary">
              {data.description}
            </Typography>
          </Flex>

          {data.columns && (
            <Board>
              {data.columns.map((column, index) => (
                <List
                  key={column.title}
                  column={column}
                  listIndex={index}
                  id={id}
                />
              ))}
            </Board>
          )}
        </Flex>
      )}
    </Flex>
  )
}
