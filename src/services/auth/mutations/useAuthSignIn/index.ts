import { UseMutationOptions, useMutation } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import { microservices } from '@/services/constants'


import { authSignIn } from './request'
import { AuthSignInData, AuthSignInParams } from './types'

export const useAuthSignIn = (
  options?: UseMutationOptions<AuthSignInData, AxiosError, AuthSignInParams>
) => {
  return useMutation<AuthSignInData, AxiosError, AuthSignInParams>({
    mutationFn: body => authSignIn(microservices.signIn, body),
    ...options,
  })
}