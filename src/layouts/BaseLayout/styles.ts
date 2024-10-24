import { Flex } from '@design-system/components'
import { styled } from '@styled-system/jsx'

export const Container = styled(Flex, {
  base: {
    paddingTop: '8',
    paddingBottom: '8',
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
    // paddingLeft: 295, // sidebar width
    width: 'full',
  },
})
