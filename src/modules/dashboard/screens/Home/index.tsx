'use client'

import { FaChevronRight } from 'react-icons/fa6'

import { Button, Flex, Title, Typography } from '@/design-system/components'
import { useBoardList } from '@/services/board/queries/useBoardList'
import { routes } from '@/utils/routes'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/design-system/components/Display/Spinner'

export const Home = () => {
  const { push } = useRouter()

  const { data, isLoading } = useBoardList()

  const handleGoToBoard = (id: string) => {
    push(routes.DASHBOARD_TODO_LISTS(id))
  }

  if (isLoading) {
    return <Spinner show />
  }

  if (!data?.length) {
    return (
      <Flex
        justify="center"
        align="center"
        direction="column"
        width="full"
        gap="spacing8"
      >
        <Typography fontSize="3xl">No Board registered!</Typography>
        <Button disabled={true}>Create new!</Button>
      </Flex>
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
            <Typography fontSize="md" align="center">
              {board.description}
            </Typography>

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
