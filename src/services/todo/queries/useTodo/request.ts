import axios from 'axios'

import { routes } from '@/services/constants'
import { BoardData, BoardParams } from './types'

export const board = async (
  microservice: string,
  params: BoardParams,
): Promise<BoardData> => {
  const route = routes.todo(params.id)

  const { data } = await axios.get<BoardData>(microservice + route)

  return data
}
