import { QueryKey } from '@tanstack/react-query'

export const createUseListClientsKey = (): QueryKey => [
  'clients',
  'useListClients',
]
