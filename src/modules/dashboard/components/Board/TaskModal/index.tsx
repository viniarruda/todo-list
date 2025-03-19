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

import { Priority } from '@/services/entities/Task'
import { useUpdateTask } from '@/services/task/mutations/useUpdateTask'
import { createUseBoardKey } from '@/services/task/queries/useTodo/key'
import { useBoardStore } from '@/stores/useBoardStore'

import { badges, defaultValues } from './constants'
import { schema } from './schema'
import { CloseButton, Container, CustomBadge } from './styles'
import { FormData, ModalProps } from './types'

export const TaskModal = ({ open, onClose, id, column }: ModalProps) => {
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

  // const labelPriority = useWatch({
  //   control,
  //   name: 'labelPriority',
  // })

  const { mutate, isPending } = useUpdateTask()

  // const handleSetBadge = (priority: Priority) => {
  //   setValue('labelPriority', priority)
  // }

  const onSubmit = (data: FormData) => {
    const updatedColumns = [...(board?.columns || [])]

    const currentColumnIndex = updatedColumns.findIndex(
      col => col.title === column.title,
    )

    // const newTodo = {
    //   id: Math.random().toString(36).substring(7),
    //   createdAt: new Date().toISOString(),
    //   title: data.title,
    //   labels: [
    //     {
    //       id: Math.random().toString(36).substring(7),
    //       name: data.labelName,
    //       priority: data.labelPriority as Priority,
    //     },
    //   ],
    // }

    // Create an updated version of the current column with the new todo
    const updatedCurrentColumn = {
      ...column,
      todos: [...column.todos, newTodo],
    }

    updatedColumns[currentColumnIndex] = updatedCurrentColumn

    // mutate(
    //   {
    //     id: board?.id ?? '',
    //     columns: updatedColumns,
    //   },
    //   {
    //     onSuccess: async data => {
    //       onClose()

    //       reset()

    //       queryClient.setQueryData(createUseBoardKey({ id }), data)

    //       refresh()
    //     },
    //   },
    // )
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
          Criar nova tarefa
        </Typography>
        <CloseButton onClick={onClose}>
          <IoMdCloseCircleOutline size="20px" color="#fff" />
        </CloseButton>
      </Flex>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="spacing8">
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Nome *
            </Typography>
            <TextField {...register('name')} type="text" />
            {errors.name && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.name.message}
              </Typography>
            )}
          </Flex>
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Telefone *
            </Typography>
            <TextField {...register('phone')} type="text" />
            {errors.phone && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.phone.message}
              </Typography>
            )}
          </Flex>
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Placa do carro *
            </Typography>
            <TextField {...register('carPlate')} type="text" />
            {errors.carPlate && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.carPlate.message}
              </Typography>
            )}
          </Flex>
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              CPF/CNPJ *
            </Typography>
            <TextField {...register('taxId')} type="text" />
            {errors.taxId && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.taxId.message}
              </Typography>
            )}
          </Flex>

          {/* <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Label name
            </Typography>
            <TextField {...register('labelName')} type="text" />
          </Flex> */}

          {/* <Flex direction="column" gap="spacing2">
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
          </Flex> */}
          <Flex justify="center" align="center">
            <Button
              variant="success"
              disabled={isPending}
              isLoading={isPending}
            >
              Enviar
            </Button>
          </Flex>
        </Flex>
      </form>
    </Container>
  )
}
