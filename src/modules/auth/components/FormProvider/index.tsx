'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { FormProvider as Provider, useForm } from 'react-hook-form'

import { 
  FormProviderProps,
  SignInFormData
} from './types'

import { schema } from './schema'

export const FormProvider = ({
  children,
  defaultValues,
}: FormProviderProps) => {

  const methods = useForm<SignInFormData>({
    resolver: zodResolver(schema()),
    defaultValues,
  })

  return <Provider {...methods}>{children}</Provider>
}