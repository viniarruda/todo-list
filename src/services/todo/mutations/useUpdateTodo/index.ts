import { UseMutationOptions, useMutation } from '@tanstack/react-query'

import { microservices } from '@/services/constants'

import { AxiosError } from 'axios'
import { updateBoard } from './request'
import { UpdateBoardData, UpdateBoardParams } from './types'

export const useUpdateTodo = (
  options?: UseMutationOptions<UpdateBoardData, AxiosError, UpdateBoardParams>,
) => {
  return useMutation<UpdateBoardData, AxiosError, UpdateBoardParams>({
    mutationFn: body => {
      const { id, ...rest } = body

      return updateBoard(microservices.todo(id), rest)
    },
    ...options,
  })
}
