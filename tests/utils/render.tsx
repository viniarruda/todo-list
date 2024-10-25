import React, { ReactElement } from 'react'

import { RenderOptions, render as testingRender } from '@testing-library/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Props } from './types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const AllTheProviders = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => testingRender(ui, { wrapper: AllTheProviders, ...options })

export { act, fireEvent, screen, waitFor } from '@testing-library/react'

export { customRender as render }
