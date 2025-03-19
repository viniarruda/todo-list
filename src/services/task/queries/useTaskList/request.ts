import { axiosInstance } from '@/libs/axios'
import { TaskListData } from './types'

export const taskList = async (microservice: string): Promise<TaskListData> => {
  const { data } = await axiosInstance.get<TaskListData>(microservice)

  return data
}
