import { routes } from '@/services/constants'
import { BoardData, BoardParams } from './types'
import { axiosInstance } from '@/libs/axios'

export const board = async (
  microservice: string,
  params: BoardParams,
): Promise<BoardData> => {
  const route = routes.board(params.id)

  const { data } = await axiosInstance.get<BoardData>(microservice + route)

  return data
}
