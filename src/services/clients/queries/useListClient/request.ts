import { ListClientData } from './types'
import { axiosInstance } from '@/libs/axios'

export const listClients = async (
  microservice: string,
): Promise<ListClientData> => {
  const { data } = await axiosInstance.get<ListClientData>(microservice)

  return data
}
