import axios from 'axios'

import { BoardData } from './types'

export const board = async (microservice: string): Promise<BoardData> => {
  const { data } = await axios.get<BoardData>(microservice)

  return data
}
