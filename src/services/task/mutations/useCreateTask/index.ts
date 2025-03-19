import { UseMutationOptions, useMutation } from '@tanstack/react-query'

import { microservices } from '@/services/constants'

import { AxiosError } from 'axios'
import { createTask } from './request'
import { CreateTaskData, CreateTaskParams } from './types'

export const useCreateTask = (
  options?: UseMutationOptions<CreateTaskData, AxiosError, CreateTaskParams>,
) => {
  return useMutation<CreateTaskData, AxiosError, CreateTaskParams>({
    mutationFn: body => {
      const { id, ...rest } = body

      return createTask(microservices.task(id), rest)
    },
    ...options,
  })
}
