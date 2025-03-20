import { routes } from '@/services/constants'
import { TaskData, TaskParams } from './types'
import { axiosInstance } from '@/libs/axios'

export const task = async (
  microservice: string,
  params: TaskParams,
): Promise<TaskData> => {
  const route = routes.task(params.id)

  const { data } = await axiosInstance.get<TaskData>(microservice + route)

  return data
}
