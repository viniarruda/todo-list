import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { microservices } from '@/services/constants'

import { createUseBoardListKey } from './key'
import { boardList } from './request'
import { BoardListData } from './types'

export const useBoardList = (
  options?: UseQueryOptions<BoardListData, AxiosError>,
) => {
  return useQuery<BoardListData, AxiosError>({
    queryKey: createUseBoardListKey(),
    queryFn: () => boardList(microservices.boards),
    ...options,
  })
}
