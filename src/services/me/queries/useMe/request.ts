import { MeData } from './types'
import { axiosInstance } from '@/libs/axios'

export const me = async (microservice: string): Promise<MeData> => {
  const { data } = await axiosInstance.get<MeData>(microservice)

  return data
}
