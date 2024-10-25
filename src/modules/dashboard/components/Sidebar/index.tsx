'use client'

import { Flex } from '@/design-system/components'

import { useUserStore } from '@/stores/useUserStore'
import { menuItens } from './constants'
import { MenuItem } from './MenuItem'
import { ProfileCard } from './ProfileCard'

export const Sidebar = () => {
  const userInfo = useUserStore(state => state.user)

  return (
    <Flex
      width="295px"
      direction="column"
      height="lvh"
      bg="backgroundPrimary"
      align="start"
      justify="between"
    >
      <Flex
        direction="column"
        justify="start"
        width="full"
        px="4"
        marginTop="4"
      >
        {menuItens.map(({ title, path, routes, icon }) => (
          <MenuItem
            key={title}
            title={title}
            path={path}
            routes={routes}
            icon={icon}
          />
        ))}
      </Flex>
      <Flex px="4" width="full" marginBottom="4">
        <ProfileCard user={userInfo} />
      </Flex>
    </Flex>
  )
}
