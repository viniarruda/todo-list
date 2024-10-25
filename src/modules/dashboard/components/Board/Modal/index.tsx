'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import {
  Badge,
  Button,
  Flex,
  TextField,
  Typography,
} from '@/design-system/components'

import { Priority } from '@/services/entities/Todo'
import { useUpdateTodo } from '@/services/todo/mutations/useUpdateTodo'
import { createUseBoardKey } from '@/services/todo/queries/useTodo/key'
import { useBoardStore } from '@/stores/useBoardStore'

import { badges, defaultValues } from './constants'
import { schema } from './schema'
import { CloseButton, Container, CustomBadge } from './styles'
import { FormData, ModalProps } from './types'

export const Modal = ({ open, onClose, id, column }: ModalProps) => {
  const board = useBoardStore(state => state.board)

  const { refresh } = useRouter()

  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema()),
    mode: 'onSubmit',
  })

  const labelPriority = useWatch({
    control,
    name: 'labelPriority',
  })

  const { mutate, isPending } = useUpdateTodo()

  const handleSetBadge = (priority: Priority) => {
    setValue('labelPriority', priority)
  }

  const onSubmit = (data: FormData) => {
    const updatedColumns = [...(board?.columns || [])]

    const currentColumnIndex = updatedColumns.findIndex(
      col => col.title === column.title,
    )

    const newTodo = {
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      title: data.title,
      labels: [
        {
          id: Math.random().toString(36).substring(7),
          name: data.labelName,
          priority: data.labelPriority as Priority,
        },
      ],
    }

    // Create an updated version of the current column with the new todo
    const updatedCurrentColumn = {
      ...column,
      todos: [...column.todos, newTodo],
    }

    updatedColumns[currentColumnIndex] = updatedCurrentColumn

    mutate(
      {
        id: board?.id ?? '',
        columns: updatedColumns,
      },
      {
        onSuccess: async data => {
          onClose()

          reset()

          queryClient.setQueryData(createUseBoardKey({ id }), data)

          refresh()
        },
      },
    )
  }

  return (
    <Container open={open} data-testid="formModal">
      <Flex
        justify="between"
        align="center"
        marginBottom="6"
        paddingBottom="4"
        borderBottom="1px solid rgba(255,255,255, 0.5)"
      >
        <Typography color="textPrimary" fontSize="2xl">
          Create new task
        </Typography>
        <CloseButton onClick={onClose}>
          <IoMdCloseCircleOutline size="20px" color="#fff" />
        </CloseButton>
      </Flex>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="spacing8">
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Task name *
            </Typography>
            <TextField {...register('title')} type="text" />
            {errors.title && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.title.message}
              </Typography>
            )}
          </Flex>

          {/* <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Label name
            </Typography>
            <TextField {...register('labelName')} type="text" />
          </Flex> */}

          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Label priority *
            </Typography>
            <Flex gap="spacing4">
              {badges.map(badge => (
                <CustomBadge
                  key={badge.color}
                  color={badge.color}
                  active={badge.priority === labelPriority}
                  onClick={() => handleSetBadge(badge.priority)}
                />
              ))}
            </Flex>
            {errors.labelPriority && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.labelPriority.message}
              </Typography>
            )}
          </Flex>
          <Flex justify="center" align="center">
            <Button
              variant="success"
              disabled={isPending}
              isLoading={isPending}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>
    </Container>
  )
}
