import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { baseUrl } from '@/services/constants'

import { createUseBoardKey } from './key'
import { board } from './request'
import { BoardData, BoardParams } from './types'

export const useBoard = (
  params: BoardParams,
  options?: UseQueryOptions<BoardData, AxiosError, BoardData>,
) => {
  return useQuery<BoardData, AxiosError, BoardData>({
    queryKey: createUseBoardKey(params),
    queryFn: () => board(baseUrl, params),
    ...options,
  })
}
