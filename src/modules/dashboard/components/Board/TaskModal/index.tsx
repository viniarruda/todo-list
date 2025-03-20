'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import {
  Badge,
  Button,
  Flex,
  Select,
  TextField,
  Typography,
} from '@/design-system/components'

import { useBoardStore } from '@/stores/useBoardStore'

import { badges, defaultValues } from './constants'
import { schema } from './schema'
import { CloseButton, Container, CustomBadge } from './styles'
import { FormData, ModalProps } from './types'
import { useListClients } from '@/services/clients/queries/useListClient'
import { useCreateTask } from '@/services/task/mutations/useCreateTask'

import { createUseTaskListKey } from '@/services/task/queries/useTaskList/key'

export const TaskModal = ({ open, onClose }: ModalProps) => {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema()),
    mode: 'onSubmit',
  })

  const { mutate, isPending } = useCreateTask()

  const { data, isLoading } = useListClients()

  const onSubmit = (data: FormData) => {
    mutate(
      {
        clientId: data.clientId,
        carPlate: data.carPlate,
      },
      {
        onSettled: async () => {
          await queryClient.invalidateQueries({
            queryKey: createUseTaskListKey(),
          })
          onClose()
        },
      },
    )
  }

  const clients =
    data?.map(item => ({ label: item.name, value: item.id })) || []

  return (
    <Container open={open} data-testid="formModal" size={'md'}>
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
              Cliente *
            </Typography>
            <Controller
              name="clientId"
              control={control}
              render={({ field }) => (
                <Select
                  options={clients}
                  value={field.value}
                  placeholder="Escolha um cliente"
                  onChange={field.onChange}
                />
              )}
            />
            {errors.clientId && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.clientId.message}
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
