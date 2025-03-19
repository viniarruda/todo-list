import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { microservices } from '@/services/constants'

import { createUseMeKey } from './key'
import { me } from './request'
import { MeData } from './types'

export const useMe = (
  options?: UseQueryOptions<MeData, AxiosError, MeData>,
) => {
  return useQuery<MeData, AxiosError, MeData>({
    queryKey: createUseMeKey(),
    queryFn: () => me(microservices.me),
    ...options,
  })
}
