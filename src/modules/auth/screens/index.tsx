import { Title, Typography } from '@/design-system/components/Display/Typography'
import { routes } from '@/utils/routes'

import { Flex, Button, TextField } from '@design-system/components'

import Link from 'next/link'

export const LoginScreen = () => {
  return (
    <Flex
      width="full"
      height="dvh"
      justify="center"
      align="center"
      bg="primary"
    >
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
            <Typography color="textPrimary">Username</Typography>
            <TextField type="text" size="full"/>
          </Flex>

          <Flex direction="column" gap="spacing2">
            <Typography color="textPrimary">Password</Typography>
            <TextField type="password" size="full" />
          </Flex>
        </Flex>

        <Link href={routes.register}>Register</Link>

        <Button variant="success">Create</Button>
      </Flex>
    </Flex>
  )
}
