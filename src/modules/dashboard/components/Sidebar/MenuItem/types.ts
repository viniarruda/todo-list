import { RoutesProps } from '@/modules/dashboard/components/Sidebar/types'

export type MenuItemProps = {
  title: string
  routes: RoutesProps
  path: string
  icon: React.ReactNode
}
