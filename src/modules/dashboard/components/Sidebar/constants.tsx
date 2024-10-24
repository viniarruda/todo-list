import { routes } from '@/utils/routes'

import { FaHouseChimney, FaTableList } from 'react-icons/fa6'
import { MenuItems } from './types'

export const menuItens: MenuItems = [
  {
    title: 'Home',
    routes: [routes.DASHBOARD],
    path: routes.DASHBOARD,
    icon: <FaHouseChimney />,
  },
  // {
  //   title: 'Todo Lists',
  //   routes: [routes.TODO_LISTS, routes.NEW_TODO_LISTS],
  //   path: routes.TODO_LISTS,
  //   icon: <FaTableList />,
  // },
]
