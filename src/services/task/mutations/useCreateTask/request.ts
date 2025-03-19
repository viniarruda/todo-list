import { AxiosResponse } from 'axios'

import { CreateTaskData, CreateTaskParams } from './types'
import { axiosInstance } from '@/libs/axios'

export const createTask = async (
  microservice: string,
  body: Omit<CreateTaskParams, 'id'>,
): Promise<CreateTaskData> => {
  const { data } = await axiosInstance.post<
    CreateTaskData,
    AxiosResponse<CreateTaskData>,
    Omit<CreateTaskParams, 'id'>
  >(microservice, body)

  return data
}
