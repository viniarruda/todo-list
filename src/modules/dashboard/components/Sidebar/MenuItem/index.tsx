'use client'

import { Flex } from '@/design-system/components'
import { usePathname } from 'next/navigation'

import { CustomLink, Item } from './styles'
import { MenuItemProps } from './types'

export const MenuItem = ({ path, routes, title, icon }: MenuItemProps) => {
  const pathname = usePathname()

  const isActive = routes.includes(pathname)

  return (
    <Flex width="full">
      <CustomLink href={path}>
        <Item variant={'active'}>
          {icon}
          {title}
        </Item>
      </CustomLink>
    </Flex>
  )
}
