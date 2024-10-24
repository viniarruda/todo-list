import { styled } from '@styled-system/jsx'
import Link from 'next/link'

export const Item = styled('div', {
  base: {
    padding: '4',
    color: 'textPrimary',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2',
    flexDirection: 'row',
    borderRadius: 'md',
  },

  variants: {
    variant: {
      active: {
        bg: 'backgroundTertiary',
        fontWeight: 'bold',
      },
      default: {
        bg: 'backgroundPrimary',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const CustomLink = styled(Link, {
  base: {
    textDecoration: 'none',
    color: 'textPrimary',
    width: 'full',
  },
})
