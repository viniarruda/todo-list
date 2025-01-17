'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { Flex } from '@/design-system/components'
import { FormLogin } from '@/modules/auth/components/Form'

import { SignInFormData } from '@/modules/auth/components/FormProvider/types'
import { useAuthSignIn } from '@/services/auth/mutations/useAuthSignIn'
import { routes } from '@/utils/routes'

import { useUserStore } from '@/stores/useUserStore'

export const FormRoot = () => {
  const { mutate, isPending } = useAuthSignIn()

  const { push } = useRouter()

  const { handleSubmit } = useFormContext<SignInFormData>()

  const saveNewUser = useUserStore(state => state.saveNewUser)

  const onSubmit = (data: SignInFormData) => {
    mutate(
      {
        username: data.email,
        password: data.password,
      },
      {
        onSuccess: data => {
          push(routes.DASHBOARD)

          saveNewUser({
            email: data.username,
            name: data.name,
            id: data.id,
          })
        },
      },
    )
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gridRowGap="4">
        <FormLogin isLoading={isPending} />
      </Flex>
    </form>
  )
}
