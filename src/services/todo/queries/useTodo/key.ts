import { QueryKey } from '@tanstack/react-query'

import { BoardParams } from './types'

export const createUseBoardKey = (params: BoardParams): QueryKey => [
  'board',
  'useBoard',
  params,
]
