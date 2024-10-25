import { styled } from '@styled-system/jsx'

import { Flex } from '@/design-system/components'

export const Container = styled(Flex, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    bg: 'gray.200',
  },

  variants: {
    size: {
      xsmall: {
        width: '24px',
        height: '24px',
      },
      small: {
        width: '32px',
        height: '32px',
      },
      medium: {
        width: '40px',
        height: '40px',
      },
      large: {
        width: '48px',
        height: '48px',
      },
      xlarge: {
        width: '56px',
        height: '56px',
      },
    },
  },
})
