import { Flex } from '@/design-system/components'
import { styled } from '@styled-system/jsx'

export const Container = styled(Flex, {
  base: {
    direction: 'column',
    position: 'relative',
    borderRadius: 'sm',
    marginBottom: '5',
    padding: '2',
    bg: 'white',
    color: 'neutral.900',
    boxShadow: '0 1px 4px 0 rgba(192, 208, 230, 0.8)',
    borderTop: '50px solid rgba(230, 236, 245, 0.4)',
    cursor: 'grab',
  },
})

export const Header = styled(`header`, {
  base: {
    position: 'absolute',
    top: '-38px',
    left: '5px',
  },
})
