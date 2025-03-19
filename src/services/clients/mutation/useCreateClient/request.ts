import { AxiosResponse } from 'axios'

import { CreateClientData, CreateClientParams } from './types'
import { axiosInstance } from '@/libs/axios'

export const createClient = async (
  microservice: string,
  body: CreateClientParams,
): Promise<CreateClientData> => {
  const { data } = await axiosInstance.post<
    CreateClientData,
    AxiosResponse<CreateClientData>,
    CreateClientParams
  >(microservice, body)

  return data
}
