'use client'

import { useState } from 'react'
import { MdAdd } from 'react-icons/md'

import { Flex, Typography } from '@/design-system/components'

import { Card } from '@/modules/dashboard/components/Board/Card'
import { TaskModal } from '@/modules/dashboard/components/Board/TaskModal'

import { ListProps } from './types'

import { ButtonIcon, Container, Header } from './styles'
import { useTaskList } from '@/services/task/queries/useTaskList'

export const List = ({ column, listIndex, id, columns }: ListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleModal = () => setShowModal(!showModal)

  const { data, isLoading } = useTaskList()

  const columnData = data?.filter(task => task.status === column.taskStatus)

  return (
    <Container done={column.done}>
      <Header>
        <Typography fontSize="md" color="textSecondary">
          {column.title}
        </Typography>
        <Flex height="42px" width="42px" ml="4">
          {column.creatable && (
            <ButtonIcon onClick={toggleModal}>
              <MdAdd size="16px" color="#fff" />
            </ButtonIcon>
          )}
        </Flex>
      </Header>
      <ul>
        {columnData?.map((task, index, tasks) => (
          <Card
            key={task.id}
            id={id}
            index={index}
            listIndex={listIndex}
            todo={task}
            columns={columns}
          />
        ))}
      </ul>
      <Card id={id} index={(columnData || [])?.length} listIndex={listIndex} />
      <TaskModal open={showModal} onClose={toggleModal} id={id} isEditing />
    </Container>
  )
}
