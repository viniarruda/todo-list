'use client'

import { Button, Flex, Typography, Spinner } from '@/design-system/components'
import { useBoard } from '@/services/task/queries/useTodo'

import { List } from '@/modules/dashboard/components/Board/List'
import { Board } from '@/modules/dashboard/components/Board/styles'
import { ClientModal } from '@/modules/dashboard/components/Board/ClientModal'
import { useBoardStore } from '@/stores/useBoardStore'

import { useEffect, useState } from 'react'
import { TodoListScreenProps } from './types'

export const TodoListScreen = ({ id }: TodoListScreenProps) => {
  const [showClientModal, setShowClientModal] = useState<boolean>(false)

  const toggleClientModal = () => setShowClientModal(!showClientModal)

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
      {isLoading && <Spinner show />}

      {data && (
        <Flex direction="column" width="full" height="full" color="inverse">
          <Flex direction="column" align="center">
            <Typography fontSize="5xl" color="textPrimary">
              {data.title}
            </Typography>
            <Flex direction="row" align="center" gap="spacing8">
              <Typography fontSize="3xl" fontWeight="light" color="textPrimary">
                {data.description}
              </Typography>
              <Button onClick={toggleClientModal}>Cadastrar clientes</Button>
            </Flex>
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
      <ClientModal open={showClientModal} onClose={toggleClientModal} />
    </Flex>
  )
}
