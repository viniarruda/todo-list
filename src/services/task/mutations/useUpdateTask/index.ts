import { UseMutationOptions, useMutation } from '@tanstack/react-query'

import { microservices } from '@/services/constants'

import { AxiosError } from 'axios'
import { updateTask } from './request'
import { UpdateTaskData, UpdateTaskParams } from './types'

export const useUpdateTask = (
  options?: UseMutationOptions<UpdateTaskData, AxiosError, UpdateTaskParams>,
) => {
  return useMutation<UpdateTaskData, AxiosError, UpdateTaskParams>({
    mutationFn: body => {
      const { id, ...rest } = body

      return updateTask(microservices.task(id), rest)
    },
    ...options,
  })
}
