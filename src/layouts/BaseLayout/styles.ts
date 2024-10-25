import { Flex } from '@/design-system/components'
import { styled } from '@styled-system/jsx'

export const Container = styled(Flex, {
  base: {
    paddingLeft: '16',
    paddingRight: '16',
    backgroundColor: 'backgroundSecondary',
    color: 'textPrimary',
    fontWeight: 'medium',
    height: 'full',
  },
})

export const Main = styled('main', {
  base: {
    width: 'full',
  },
})
