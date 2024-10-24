'use client'

import { Flex } from '@design-system/components'

import { FormProvider } from '@/modules/auth/components/FormProvider'
import { FormRoot } from '@/modules/auth/components/FormRoot'

import { defaultValues } from './constants'

export const LoginScreen = () => {
  return (
    <Flex
      width="full"
      height="dvh"
      justify="center"
      align="center"
      bg="primary"
    >
      <FormProvider defaultValues={defaultValues}>
        <FormRoot />
      </FormProvider>
    </Flex>
  )
}
