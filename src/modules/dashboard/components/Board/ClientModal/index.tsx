'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import {
  Badge,
  Button,
  Flex,
  TextField,
  Typography,
} from '@/design-system/components'

import { defaultValues } from './constants'
import { schema } from './schema'
import { CloseButton, Container, CustomBadge } from './styles'
import { FormData, ModalProps } from './types'
import { Spinner } from '@/design-system/components/Display/Spinner'
import { useCreateClient } from '@/services/clients/mutation/useCreateClient'
import { useToast } from '@/contexts/Toast'
import { useQueryClient } from '@tanstack/react-query'
import { createUseListClientsKey } from '@/services/clients/queries/useListClient/key'

export const ClientModal = ({ onClose, open }: ModalProps) => {
  const queryClient = useQueryClient()

  const { open: openToast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema()),
    mode: 'onSubmit',
  })

  const { mutate, isPending } = useCreateClient()

  const onSubmit = (data: FormData) => {
    mutate(
      {
        name: data.name,
        telephone: data.phone,
        taxId: data.taxId,
      },
      {
        onSuccess: async () => {
          openToast('Cliente cadastrado com sucesso!', {
            variant: 'success',
          })

          await queryClient.invalidateQueries({
            queryKey: createUseListClientsKey(),
          })

          onClose()
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
          Criar novo cliente
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
