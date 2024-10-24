import Head from 'next/head'

import { Sidebar } from '@/modules/dashboard/components/Sidebar'

import { Flex } from '@/design-system/components'
import { Container, Main } from './styles'
import { BaseLayoutProps } from './types'

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
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
