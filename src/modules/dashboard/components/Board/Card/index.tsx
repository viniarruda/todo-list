'use client'

import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { Badge, Flex, Typography } from '@/design-system/components'
import { Priority } from '@/services/entities/Task'

import { useUpdateTask } from '@/services/task/mutations/useUpdateTask'
import { createUseBoardKey } from '@/services/task/queries/useTask/key'
import { createUseTaskListKey } from '@/services/task/queries/useTaskList/key'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Container, EmptyCard, Header } from './styles'
import { badgeColor, CardProps, DragItemProps } from './types'
import { updateBoardColumns } from './utils'
import { TaskStatus } from '@/services/entities/Board'

export const Card = ({ todo, id, index, listIndex, columns }: CardProps) => {
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
              onSuccess: async data => {
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

  const getBadgeVariantColor = (status: Priority) => {
    const badgeVariants: badgeColor = {
      [Priority.Low]: 'info',
      [Priority.Medium]: 'warning',
      [Priority.High]: 'danger',
    }

    return badgeVariants[status]
  }

  dragRef(dropRef(ref))

  if (todo === undefined) {
    return <EmptyCard ref={ref} />
  }

  return (
    <Container ref={ref} isDragging={isDragging}>
      {/* <Header>
        {todo?.labels?.map(label => (
          <Badge key={label.id} color={getBadgeVariantColor(label.priority)}>
            {label.name}
          </Badge>
        ))}
      </Header> */}
      <Header>
        <Typography fontSize="md" fontWeight="bold">
          Placa: {todo?.carPlate}
        </Typography>
      </Header>

      <Flex direction="column" minHeight="16" justify="center">
        <Typography fontSize="md" fontWeight="normal" color="textTertiary">
          {todo?.description}
        </Typography>
      </Flex>
    </Container>
  )
}
