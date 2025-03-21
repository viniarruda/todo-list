import { useFieldArray, useFormContext, Controller } from 'react-hook-form'
import { FiPlus, FiTrash } from 'react-icons/fi'

import { Button, Flex, TextField, Typography } from '@/design-system/components'

import { FormData } from '@/modules/dashboard/components/Board/EditTaskModal/types'
import { useQueryClient } from '@tanstack/react-query'
import { useUpdateTask } from '@/services/task/mutations/useUpdateTask'
import { createUseTaskListKey } from '@/services/task/queries/useTaskList/key'

export const FormRoot = ({
  id,
  onClose,
}: {
  id: string
  onClose: () => void
}) => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useUpdateTask()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useFormContext<FormData>()

  console.log('errors', errors)

  const serviceOrders = watch('serviceOrders') || []

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'serviceOrders',
  })

  const onSubmit = (data: FormData) => {
    console.log('data', data)

    mutate(
      {
        id,
        serviceOrders: data.serviceOrders?.map(order => order.order),
        description: data.description,
        totalAmount: Number(data.totalAmount),
        carPlate: data.carPlate,
      },
      {
        onSettled: async () => {
          await queryClient.invalidateQueries({
            queryKey: createUseTaskListKey(),
          })
          reset()
          onClose()
        },
      },
    )
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="spacing4">
        <Flex direction="column" gap="spacing2">
          <Typography color="textSecondary" fontSize="md">
            Descrição
          </Typography>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextField {...field} type="text" />}
          />

          {errors.description && (
            <Typography fontSize="sm" color="feedbackError">
              {errors.description.message}
            </Typography>
          )}
        </Flex>
        <Flex direction="column" gap="spacing2">
          <Typography color="textSecondary" fontSize="md">
            Placa do carro
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
            Valor do serviço
          </Typography>
          <TextField {...register('totalAmount')} type="text" />
          {errors.totalAmount && (
            <Typography fontSize="sm" color="feedbackError">
              {errors.totalAmount.message}
            </Typography>
          )}
        </Flex>
        <Flex direction="column" gap="spacing2">
          <Typography color="textSecondary" fontSize="md">
            Ordens de serviço
          </Typography>
          {fields.map((field, index) => (
            <Flex key={field.id} justifyContent="space-between">
              <TextField
                {...register(`serviceOrders.${index}.order`)}
                type="text"
              />
              {serviceOrders.length > 0 && (
                <Button
                  type="button"
                  aria-label="Remover"
                  onClick={() => remove(index)}
                >
                  <FiTrash size="16px" color="#FFF" />
                </Button>
              )}
            </Flex>
          ))}
        </Flex>

        <Button type="button" onClick={() => append({ order: '' })}>
          <FiPlus size="16px" />
        </Button>

        <Flex justify="center" align="center">
          <Button variant="success" disabled={isPending} isLoading={isPending}>
            Enviar
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
