import { AxiosResponse } from 'axios'

import { UpdateTaskData, UpdateTaskParams } from './types'
import { axiosInstance } from '@/libs/axios'

export const updateTask = async (
  microservice: string,
  body: Omit<UpdateTaskParams, 'id'>,
): Promise<UpdateTaskData> => {
  const { data } = await axiosInstance.patch<
    UpdateTaskData,
    AxiosResponse<UpdateTaskData>,
    Omit<UpdateTaskParams, 'id'>
  >(microservice, body)

  return data
}
