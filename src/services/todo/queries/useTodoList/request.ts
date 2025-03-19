import { BoardListData } from './types'
import { axiosInstance } from '@/libs/axios'

export const boardList = async (
  microservice: string,
): Promise<BoardListData> => {
  const { data } = await axiosInstance.get<BoardListData>(microservice)

  return data
}
