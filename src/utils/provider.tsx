'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 0,
          staleTime: 0,
          refetchOnMount: true,
          refetchOnWindowFocus: true,
          refetchInterval: false,
        },
      },
    }),
  )

  return (
    <QueryClientProvider client={client}>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </QueryClientProvider>
  )
}

export default Providers
