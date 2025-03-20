import { UseMutationOptions, useMutation } from '@tanstack/react-query'

import { microservices } from '@/services/constants'

import { AxiosError } from 'axios'
import { deleteTask } from './request'
import { DeleteTaskData, DeleteTaskParams } from './types'

export const useDeleteTask = (
  options?: UseMutationOptions<DeleteTaskData, AxiosError, DeleteTaskParams>,
) => {
  return useMutation<DeleteTaskData, AxiosError, DeleteTaskParams>({
    mutationFn: body => {
      return deleteTask(microservices.task(body.id))
    },
    ...options,
  })
}
