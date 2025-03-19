import { Avatar, Flex, Typography } from '@/design-system/components'
import { ProfileCardProps } from './types'

export const ProfileCard = ({ username }: ProfileCardProps) => {
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
      {username && <Avatar name={username} size="xlarge" />}
      <Typography color="textPrimary">{username}</Typography>
    </Flex>
  )
}
