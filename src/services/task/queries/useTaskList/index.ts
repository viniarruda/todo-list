import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { microservices } from '@/services/constants'

import { createUseTaskListKey } from './key'
import { taskList } from './request'
import { TaskListData } from './types'

export const useTaskList = (
  options?: UseQueryOptions<TaskListData, AxiosError>,
) => {
  return useQuery<TaskListData, AxiosError>({
    queryKey: createUseTaskListKey(),
    queryFn: () => taskList(microservices.tasks),
    ...options,
  })
}
