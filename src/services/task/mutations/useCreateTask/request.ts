import axios, { AxiosResponse } from 'axios'

import { CreateTaskData, CreateTaskParams } from './types'

export const createTask = async (
  microservice: string,
  body: Omit<CreateTaskParams, 'id'>,
): Promise<CreateTaskData> => {
  const { data } = await axios.post<
    CreateTaskData,
    AxiosResponse<CreateTaskData>,
    Omit<CreateTaskParams, 'id'>
  >(microservice, body)

  return data
}
