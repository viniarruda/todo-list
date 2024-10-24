'use client'

import { FaChevronRight } from 'react-icons/fa6'

import { useBoardList } from '@/services/todo/queries/useTodoList'
import { Button, Flex, Title, Typography } from '@design-system/components'

export const Home = () => {
  const { data, isLoading } = useBoardList()

  const handleGoToBoard = () => {
    //navigate to board
  }

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
      <Flex
        align="center"
        justify="between"
        borderBottom="1px solid #d6d6d6"
        marginBottom="8"
      >
        <Title color="textPrimary">Todo lists</Title>
        <Button variant="success">Create new board</Button>
      </Flex>
      <Flex wrap="wrap" borderRadius="sm" p="2" justify="center" width="full">
        {data.map(board => (
          <Flex
            key={board.id}
            mx="2"
            bg="backgroundTertiary"
            direction="column"
            borderRadius="sm"
            p="8"
            gap="spacing4"
          >
            <Typography fontSize="2xl" align="center">
              {board.title}
            </Typography>
            <Typography fontSize="md">{board.description}</Typography>

            <Button
              onClick={handleGoToBoard}
              endIcon={<FaChevronRight size="12px" />}
            >
              Go to Board
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
