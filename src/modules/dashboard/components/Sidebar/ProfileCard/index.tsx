import { Avatar, Flex, Typography } from '@design-system/components'
import { ProfileCardProps } from './types'

export const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <Flex
      bg="backgroundTertiary"
      justify="center"
      align="center"
      gap="spacing4"
      p="4"
      height="100px"
      width="full"
      borderRadius="md"
    >
      {user?.name && <Avatar name={user.name} size="xlarge" />}
      <Typography color="textPrimary">{user?.name}</Typography>
    </Flex>
  )
}
