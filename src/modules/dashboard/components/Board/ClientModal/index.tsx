'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import {
  Button,
  Flex,
  MaskedStyledInput,
  TextField,
  Typography,
} from '@/design-system/components'

import { clearPhoneMask, clearTaxIdMask } from '@/utils/formatters'

import { useToast } from '@/contexts/Toast'
import { Spinner } from '@/design-system/components/Display/Spinner'
import { useCreateClient } from '@/services/clients/mutation/useCreateClient'
import { createUseListClientsKey } from '@/services/clients/queries/useListClient/key'
import { useQueryClient } from '@tanstack/react-query'
import { defaultValues } from './constants'
import { schema } from './schema'
import { CloseButton, Container } from './styles'
import { FormData, ModalProps } from './types'

export const ClientModal = ({ onClose, open }: ModalProps) => {
  const queryClient = useQueryClient()
  const { open: openToast } = useToast()
  const { mutate, isPending } = useCreateClient()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema()),
    mode: 'onSubmit',
  })

  const onSubmit = (data: FormData) => {
    // Clean masked values before submitting
    const cleanPhone = data.phone ? clearPhoneMask(data.phone) : ''
    const cleanTaxId = data.taxId ? clearTaxIdMask(data.taxId) : ''

    mutate(
      {
        name: data.name,
        telephone: cleanPhone,
        taxId: cleanTaxId,
      },
      {
        onSuccess: async () => {
          openToast('Cliente cadastrado com sucesso!', {
            variant: 'success',
          })

          await queryClient.invalidateQueries({
            queryKey: createUseListClientsKey(),
          })

          handleClose()
        },
      },
    )
  }

  const handleClose = () => {
    reset()
    onClose()
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
        <CloseButton onClick={handleClose}>
          <IoMdCloseCircleOutline size="20px" color="#fff" />
        </CloseButton>
      </Flex>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="spacing8">
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Nome *
            </Typography>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <TextField {...field} type="text" />}
            />
            {errors.name && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.name.message as string}
              </Typography>
            )}
          </Flex>
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              Telefone *
            </Typography>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <MaskedStyledInput
                  mask="(00)00000-0000"
                  inputRef={ref}
                  value={value}
                  onAccept={(value: string) => {
                    onChange(value)
                  }}
                />
              )}
            />
            {errors.phone && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.phone.message as string}
              </Typography>
            )}
          </Flex>
          <Flex direction="column" gap="spacing2">
            <Typography color="textSecondary" fontSize="md">
              CPF/CNPJ *
            </Typography>
            <Controller
              name="taxId"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <MaskedStyledInput
                  mask={[
                    {
                      mask: '000.000.000-00',
                      regex: /^\d{0,11}/,
                    },
                    {
                      mask: '00.000.000/0000-00',
                      regex: /^\d{12,14}/,
                    },
                  ]}
                  inputRef={ref}
                  value={value}
                  onAccept={(value: string) => {
                    onChange(value)
                  }}
                />
              )}
            />
            {errors.taxId && (
              <Typography fontSize="sm" color="feedbackError">
                {errors.taxId.message as string}
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
