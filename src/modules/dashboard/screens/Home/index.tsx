'use client'

import { useBoardList } from '@/services/todo/queries/useTodoList'
import { Button, Flex, Title, Typography } from '@design-system/components'

export const Home = () => {
  const { data, isLoading } = useBoardList()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data?.length) {
    return (
      <div>
        <div>No Todo List registered!</div>
        <Button>Create new!</Button>
      </div>
    )
  }

  return (
    <Flex direction="column">
      <Title color="textPrimary">Todo lists</Title>
      <Flex wrap="wrap" bg="backgroundTertiary" borderRadius="sm" p="2">
        {data.map(board => (
          <div key={board.id}>
            <Typography fontSize="2xl" align="center">
              {board.title}
            </Typography>
            <Typography fontSize="md">{board.description}</Typography>
            {board.todos?.map(todo => (
              <div key={todo.id}>
                <Typography fontSize="2xl" align="center">
                  {todo.title}
                </Typography>
                <Typography fontSize="md">{todo.description}</Typography>
                <Flex bg="feedbackError">
                  <Typography color="textPrimary">{todo.status}</Typography>
                </Flex>
              </div>
            ))}
          </div>
        ))}
      </Flex>
    </Flex>
  )
}
