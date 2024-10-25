'use client'

import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { Badge, Flex, Typography } from '@/design-system/components'
import { Priority } from '@/services/entities/Todo'
import { useBoardStore } from '@/stores/useBoardStore'

import { useUpdateTodo } from '@/services/todo/mutations/useUpdateTodo'
import { createUseBoardKey } from '@/services/todo/queries/useTodo/key'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Container, EmptyCard, Header } from './styles'
import { badgeColor, CardProps, DragItemProps } from './types'
import { updateBoardColumns } from './utils'

export const Card = ({ todo, id, index, listIndex }: CardProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const board = useBoardStore(state => state.board)

  const { mutate } = useUpdateTodo()

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
    hover(item: DragItemProps, monitor) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex

      // item = card that are been dragged
      const draggedIndex = item.index
      const targetIndex = index

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return
      }

      const targetSize = ref.current?.getBoundingClientRect() // returns the size of the element

      if (targetSize) {
        const targetCenter = (targetSize.bottom - targetSize.top) / 2

        const draggedOffset = monitor.getClientOffset() // returns the position of the card

        const draggedTop = draggedOffset && draggedOffset.y - targetSize.top

        if (draggedTop) {
          if (draggedIndex < targetIndex && draggedTop < targetCenter) {
            // if you try to drag the dragged card before the target card, do nothing
            return
          }

          if (draggedIndex > targetIndex && draggedTop > targetCenter) {
            // if you try to drag the dragged card after the target card, do nothing
            return
          }
        }

        const updatedColumns = updateBoardColumns({
          columns: board?.columns,
          destinationIndex: targetIndex,
          sourceIndex: draggedIndex,
          draggedListIndex,
          targetListIndex,
        })

        mutate(
          {
            id: id,
            columns: updatedColumns,
          },
          {
            onSuccess: data => {
              queryClient.setQueryData(createUseBoardKey({ id }), data)

              refresh()
            },
          },
        )

        item.index = targetIndex
        item.listIndex = targetListIndex
      }
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
      <Header>
        {todo?.labels?.map(label => (
          <Badge key={label.id} color={getBadgeVariantColor(label.priority)}>
            {label.name}
          </Badge>
        ))}
      </Header>
      <Flex direction="column" minHeight="16" justify="center">
        <Typography fontSize="md" fontWeight="bold">
          {todo?.title}
        </Typography>
      </Flex>
    </Container>
  )
}
