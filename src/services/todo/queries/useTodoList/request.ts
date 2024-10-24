import axios from 'axios'

import { BoardListData } from './types'

export const boardList = async (
  microservice: string,
): Promise<BoardListData> => {
  const { data } = await axios.get<BoardListData>(microservice)

  return data
}
