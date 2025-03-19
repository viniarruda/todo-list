import axios, { AxiosResponse } from 'axios'

import { UpdateTaskData, UpdateTaskParams } from './types'

export const updateTask = async (
  microservice: string,
  body: Omit<UpdateTaskParams, 'id'>,
): Promise<UpdateTaskData> => {
  const { data } = await axios.put<
    UpdateTaskData,
    AxiosResponse<UpdateTaskData>,
    Omit<UpdateTaskParams, 'id'>
  >(microservice, body)

  return data
}
