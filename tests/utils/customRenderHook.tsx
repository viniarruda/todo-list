import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook as testingHookRender } from '@testing-library/react'

import { Props } from './types'

const AllTheProviders = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

const customRenderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
) => testingHookRender(callback, { wrapper: AllTheProviders })

// ts-prune-ignore-next
export { act, waitFor } from '@testing-library/react'

// ts-prune-ignore-next
export { customRenderHook as renderHook }
