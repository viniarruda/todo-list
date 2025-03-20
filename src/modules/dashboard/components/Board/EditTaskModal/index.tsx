'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import { Flex, Spinner, Typography } from '@/design-system/components'

import { buildDefaultValues, defaultValues } from './constants'
import { schema } from './schema'
import { CloseButton, Container } from './styles'
import { FormData, ModalProps } from './types'

import { useTask } from '@/services/task/queries/useTask'
import { useEffect } from 'react'

import { FormRoot } from '@/modules/dashboard/components/Board/Form'

export const EditTaskModal = ({ open, onClose, id }: ModalProps) => {
  const { data, isLoading } = useTask({
    id,
  })

  const methods = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema()),
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (data) {
      methods.reset(buildDefaultValues(data))
    }
  }, [data, methods.reset])

  return (
    <Container open={open} data-testid="formModal" size={'md'}>
      <Spinner show={isLoading} />
      <Flex
        justify="between"
        align="center"
        marginBottom="6"
        paddingBottom="4"
        borderBottom="1px solid rgba(255,255,255, 0.5)"
      >
        <Typography color="textPrimary" fontSize="2xl">
          Editar tarefa {data?.carPlate}
        </Typography>
        <CloseButton onClick={onClose}>
          <IoMdCloseCircleOutline size="20px" color="#fff" />
        </CloseButton>
      </Flex>
      <FormProvider {...methods}>
        <FormRoot id={id} onClose={onClose} />
      </FormProvider>
    </Container>
  )
}
