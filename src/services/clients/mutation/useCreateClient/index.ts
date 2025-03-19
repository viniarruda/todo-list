import { UseMutationOptions, useMutation } from '@tanstack/react-query'

import { microservices } from '@/services/constants'

import { AxiosError } from 'axios'
import { createClient } from './request'
import { CreateClientData, CreateClientParams } from './types'

export const useCreateClient = (
  options?: UseMutationOptions<
    CreateClientData,
    AxiosError,
    CreateClientParams
  >,
) => {
  return useMutation<CreateClientData, AxiosError, CreateClientParams>({
    mutationFn: body => {
      return createClient(microservices.clients, body)
    },
    ...options,
  })
}
