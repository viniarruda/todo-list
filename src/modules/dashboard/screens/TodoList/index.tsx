'use client'

import { Flex, Title } from '@/design-system/components'
import { useBoard } from '@/services/todo/queries/useTodo'
import { createUseBoardKey } from '@/services/todo/queries/useTodo/key'

import { TodoListScreenProps } from './types'

export const TodoListScreen = ({ id }: TodoListScreenProps) => {
  // const { data, isLoading } = useBoard(
  //   {
  //     id,
  //   },
  //   {
  //     queryKey: createUseBoardKey({ id }),
  //     enabled: !!id,
  //   },
  // )

  return (
    <Flex>
      {console.log(id, '-------')}
      <Title>Todo List</Title>
    </Flex>
  )
}
