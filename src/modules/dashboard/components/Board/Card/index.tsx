'use client'

import { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useRouter } from 'next/navigation'
import { MdMoreVert } from 'react-icons/md'
import { MdDirectionsCar } from 'react-icons/md'
import { format } from 'date-fns'

import {
  Badge,
  DropdownMenu,
  Flex,
  Typography,
} from '@/design-system/components'
import { Priority } from '@/services/entities/Task'

import { useUpdateTask } from '@/services/task/mutations/useUpdateTask'
import { createUseTaskListKey } from '@/services/task/queries/useTaskList/key'
import { useQueryClient } from '@tanstack/react-query'
import { TaskStatus } from '@/services/entities/Board'

import { Container, EmptyCard, Header, OptionsMenu } from './styles'
import { badgeColor, CardProps, DragItemProps } from './types'
import { EditTaskModal } from '../EditTaskModal'
import { useDeleteTask } from '@/services/task/mutations/useDeleteTask'

export const Card = ({
  todo,
  index,
  listIndex,
  toggleDropDownMenu,
  openMenuId,
}: CardProps) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  const toggleEditModal = () => setOpenEditModal(!openEditModal)

  const ref = useRef<HTMLDivElement | null>(null)

  const statusMap = [
    TaskStatus.Registered,
    TaskStatus.OnBudget,
    TaskStatus.BudgetCompleted,
    TaskStatus.WaitingConfirmation,
    TaskStatus.WaitingPayment,
    TaskStatus.InProgress,
    TaskStatus.ServiceCompleted,
  ]

  const { mutate } = useUpdateTask()

  const { mutate: deleteTask } = useDeleteTask()

  const queryClient = useQueryClient()

  const { refresh } = useRouter()

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      type: 'CARD',
      index,
      id: todo?.id,
      listIndex,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: DragItemProps) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex

      // item = card that are been dragged
      const draggedIndex = item.index
      const targetIndex = index

      // Prevent unnecessary updates
      if (draggedListIndex === targetListIndex) {
        return
      }

      const newStatus = statusMap[targetListIndex]

      if (!newStatus) return

      if (item.id) {
        setTimeout(() => {
          mutate(
            {
              id: item.id,
              status: newStatus,
            },
            {
              onSuccess: async () => {
                await queryClient.invalidateQueries({
                  queryKey: createUseTaskListKey(),
                })
                refresh()
              },
            },
          )
        }, 300)
      }

      item.listIndex = targetListIndex
    },
  })

  const handleDelete = () => {
    deleteTask(
      {
        id: todo?.id ?? '',
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: createUseTaskListKey(),
          })
          refresh()
        },
      },
    )
  }

  const getBadgeVariantColor = (status: Priority) => {
    const badgeVariants: badgeColor = {
      [Priority.Low]: 'info',
      [Priority.Medium]: 'warning',
      [Priority.High]: 'danger',
    }

    return badgeVariants[status]
  }

  dragRef(dropRef(ref))

  const INITIAL_STATUS = [TaskStatus.Registered, TaskStatus.OnBudget]

  if (todo === undefined) {
    return <EmptyCard ref={ref} />
  }

  return (
    <Container ref={ref} isDragging={isDragging}>
      <Header>
        <MdDirectionsCar size="16px" color="#000" />
        <Typography fontSize="sm" fontWeight="bold">
          Placa: {todo?.carPlate}
        </Typography>

        <DropdownMenu
          isOpen={openMenuId === todo.id}
          setIsOpen={() => toggleDropDownMenu?.(todo.id)}
          handleEdit={() => {
            toggleDropDownMenu?.(todo.id)
            toggleEditModal()
          }}
          handleDelete={handleDelete}
        >
          <OptionsMenu onClick={() => toggleDropDownMenu?.(todo.id)}>
            <MdMoreVert size="20px" color="#000" />
          </OptionsMenu>
        </DropdownMenu>
      </Header>

      <Flex direction="column" minHeight="16" justify="center">
        <Typography fontSize="sm" fontWeight="semibold" color="black">
          Registrado: {format(todo?.createdAt, 'dd/MM/yyyy')}
        </Typography>
        <Typography fontSize="md" fontWeight="normal" color="textTertiary">
          {todo?.description}
        </Typography>
        {!INITIAL_STATUS.includes(todo?.status) && (
          <Typography fontSize="md" fontWeight="normal" color="neutral.900">
            R$ {todo?.totalAmount}
          </Typography>
        )}
      </Flex>

      <EditTaskModal
        id={todo.id}
        open={openEditModal}
        onClose={toggleEditModal}
      />
    </Container>
  )
}
