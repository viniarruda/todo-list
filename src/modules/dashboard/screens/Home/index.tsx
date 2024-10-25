'use client'

import { FaChevronRight } from 'react-icons/fa6'

import { Button, Flex, Title, Typography } from '@/design-system/components'
import { useBoardList } from '@/services/todo/queries/useTodoList'
import { routes } from '@/utils/routes'
import { useRouter } from 'next/navigation'

export const Home = () => {
  const { push } = useRouter()

  const { data, isLoading } = useBoardList()

  const handleGoToBoard = (id: string) => {
    push(routes.DASHBOARD_TODO_LISTS(id))
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
    <Flex direction="column" width="full">
      <Flex
        align="center"
        justify="between"
        borderBottom="1px solid #d6d6d6"
        marginBottom="8"
        width="full"
      >
        <Title color="textPrimary">Todo lists</Title>
        <Button variant="success" disabled={true}>
          Create new board
        </Button>
      </Flex>
      <Flex wrap="wrap" borderRadius="sm" p="2" justify="center" width="full">
        {data.map(board => (
          <Flex
            key={board.id}
            m="2"
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
              onClick={() => handleGoToBoard(board.id)}
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
