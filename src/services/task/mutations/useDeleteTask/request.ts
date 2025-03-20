import { AxiosResponse } from 'axios'

import { DeleteTaskParams, DeleteTaskData } from './types'
import { axiosInstance } from '@/libs/axios'

export const deleteTask = async (
  microservice: string,
): Promise<DeleteTaskData> => {
  const { data } = await axiosInstance.delete<
    DeleteTaskData,
    AxiosResponse<DeleteTaskData>
  >(microservice)

  return data
}
