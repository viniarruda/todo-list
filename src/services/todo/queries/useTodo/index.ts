import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { microservices } from '@/services/constants'

import { createUseBoardKey } from './key'
import { board } from './request'
import { BoardData, BoardParams } from './types'

export const useBoard = (
  params: BoardParams,
  options?: UseQueryOptions<BoardData, AxiosError, BoardData>,
) => {
  const route = microservices.todo(params.id)

  return useQuery<BoardData, AxiosError, BoardData>({
    queryKey: createUseBoardKey(params),
    queryFn: () => board(route),
    ...options,
  })
}
