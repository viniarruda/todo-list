'use client'

import { Flex } from '@/design-system/components'
import { usePathname } from 'next/navigation'
import { CustomLink, Item } from './styles'
import { MenuItemProps } from './types'

export const MenuItem = ({ path, routes, title, icon }: MenuItemProps) => {
  const pathname = usePathname()

  const active = routes.includes(pathname)

  console.log(active, pathname)

  return (
    <Flex width="full">
      <CustomLink href={path}>
        <Item variant={active ? 'active' : 'default'}>
          {icon}
          {title}
        </Item>
      </CustomLink>
    </Flex>
  )
}
