import { useFormContext } from 'react-hook-form'

import {
  Title,
  Typography,
} from '@/design-system/components/Display/Typography'

import { SignInFormData } from '@/modules/auth/components/FormProvider/types'
import { Button, Flex, TextField } from '@design-system/components'

export const FormLogin = ({ isLoading }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignInFormData>()

  return (
    <Flex
      gap="spacing8"
      direction="column"
      align="center"
      bg="secondary"
      width="md"
      radius="sm"
      p="10"
    >
      <Title color="textPrimary">Login</Title>

      <Flex direction="column" gap="spacing4" width="full">
        <Flex direction="column" gap="spacing2">
          <Typography color="textPrimary">E-mail</Typography>
          <TextField {...register('email')} type="text" size="full" height="10" />
          {errors.email && <Typography fontSize="xl" color="feedbackError">{errors.email.message}</Typography>}
        </Flex>

        <Flex direction="column" gap="spacing2">
          <Typography color="textPrimary">Password</Typography>
          <TextField {...register('password')} type="password" size="full" height="10"/>
          {errors.password && <Typography fontSize="xl" color="feedbackError">{errors.password.message}</Typography>}
        </Flex>
      </Flex>

      <Button variant="success" disabled={isLoading} isLoading={isLoading}>Create</Button>
    </Flex>
  )
}
