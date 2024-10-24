import axios, { AxiosResponse } from 'axios'

import { UpdateBoardData, UpdateBoardParams } from './types'

export const updateBoard = async (
  microservice: string,
  body: Omit<UpdateBoardParams, 'id'>,
): Promise<UpdateBoardData> => {
  const { data } = await axios.put<
    UpdateBoardData,
    AxiosResponse<UpdateBoardData>,
    Omit<UpdateBoardParams, 'id'>
  >(microservice, body)

  return data
}
