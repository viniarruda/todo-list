import { routes } from '@/utils/routes'

import { FaHouseChimney, FaTableList } from 'react-icons/fa6'
import { MenuItems } from './types'

export const menuItens: MenuItems = [
  {
    title: 'Home',
    routes: [routes.DASHBOARD, routes.DASHBOARD_TODO_LISTS('[boardId]')],
    path: routes.DASHBOARD,
    icon: <FaHouseChimney />,
  },
]
