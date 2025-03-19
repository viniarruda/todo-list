import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { microservices } from '@/services/constants'

import { createUseListClientsKey } from './key'
import { listClients } from './request'
import { ListClientData } from './types'

export const useListClients = (
  options?: UseQueryOptions<ListClientData, AxiosError, ListClientData>,
) => {
  return useQuery<ListClientData, AxiosError, ListClientData>({
    queryKey: createUseListClientsKey(),
    queryFn: () => listClients(microservices.clients),
    ...options,
  })
}
