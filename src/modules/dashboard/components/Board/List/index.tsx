'use client'

import { useState } from 'react'
import { MdAdd } from 'react-icons/md'

import { Flex, Typography } from '@/design-system/components'

import { Card } from '@/modules/dashboard/components/Board/Card'
import { Modal } from '@/modules/dashboard/components/Board/Modal'

import { ListProps } from './types'

import { ButtonIcon, Container, Header } from './styles'

export const List = ({ column, listIndex, id }: ListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <Container done={column.done}>
      <Header>
        <Typography fontSize="xl" color="textSecondary">
          {column.title}
        </Typography>
        <Flex height="42px" width="42px">
          {column.creatable && (
            <ButtonIcon onClick={toggleModal}>
              <MdAdd size="16px" color="#fff" />
            </ButtonIcon>
          )}
        </Flex>
      </Header>
      <ul>
        {column.todos?.map((todo, index, todos) => (
          <Card
            key={todo.id}
            id={id}
            index={index}
            listIndex={listIndex}
            todo={todo}
            todos={todos}
            currentColumn={column}
          />
        ))}
      </ul>
      {/* <Card
          index={column.todos.length}
          listIndex={listIndex}
          todos={[]}
          currentColumn={column}
        /> */}
      <Modal open={showModal} onClose={toggleModal} id={id} column={column} />
    </Container>
  )
}
