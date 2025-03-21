import { Badge } from '@/design-system/components'
import { styled } from '@styled-system/jsx'

export const CloseButton = styled(`button`, {
  base: {
    width: '42px',
    height: '42px',
    cursor: 'pointer',
    border: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Container = styled(`dialog`, {
  base: {
    width: '500px',
    height: '550px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '5',
    borderRadius: 'md',
    backgroundColor: 'backgroundPrimary',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.4)',
    zIndex: '100',
  },
})

export const CustomBadge = styled(Badge, {
  base: {
    cursor: 'pointer',
  },

  variants: {
    active: {
      true: {
        border: '4px solid rgba(255, 255, 255, 0.8)',
      },
    },
  },
})
