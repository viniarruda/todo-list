'use client'

import Head from 'next/head'

import { Sidebar } from '@/modules/dashboard/components/Sidebar'

import { Flex } from '@/design-system/components'
import { Container, Main } from './styles'
import { BaseLayoutProps } from './types'
import { useUserStore } from '@/stores/useUserStore'
import { useRouter } from 'next/navigation'
import { routes } from '@/utils/routes'
import { useToast } from '@/contexts/Toast'

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  const { replace } = useRouter()

  const getAccessToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken')
    }
  }

  const { open } = useToast()

  if (!getAccessToken()) {
    open('You need to be logged in to access this page', {
      variant: 'error',
    })

    replace(routes.LOGIN)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Flex>
        <Sidebar />

        <Main>
          <Container>{children}</Container>
        </Main>
      </Flex>
    </>
  )
}
