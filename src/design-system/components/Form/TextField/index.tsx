import { styled } from '@styled-system/jsx'

export const TextField = styled('input', {
  base: {
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'textTertiary',
    borderRadius: 'xs',
    
    color: 'textPrimary',

    p: '0.5'
  },

  variants: {
    size: {
      full: {
        width: 'full',
      },
      md: {
        width: 'md',
      },
    },
  },
})