import { QueryKey } from '@tanstack/react-query'

import { TaskParams } from './types'

export const createUseTaskKey = (params: TaskParams): QueryKey => [
  'task',
  'useTask',
  params,
]
