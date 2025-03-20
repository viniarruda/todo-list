import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { apiUrl } from '@/services/constants'

import { createUseTaskKey } from './key'
import { task } from './request'
import { TaskData, TaskParams } from './types'

export const useTask = (
  params: TaskParams,
  options?: UseQueryOptions<TaskData, AxiosError, TaskData>,
) => {
  return useQuery<TaskData, AxiosError, TaskData>({
    queryKey: createUseTaskKey(params),
    queryFn: () => task(apiUrl, params),
    ...options,
  })
}
