import { styled } from '@styled-system/jsx'

export const Badge = styled(`span`, {
  base: {
    borderRadius: 'sm',
    padding: '2',
    color: 'textPrimary',
    marginRight: '2',
    display: 'inline-block',
    minWidth: '42px',
    height: '24px',
  },

  variants: {
    color: {
      success: {
        backgroundColor: 'feedbackSuccess',
        color: 'neutral.900',
      },
      danger: {
        backgroundColor: 'feedbackError',
        color: 'textPrimary',
      },
      warning: {
        backgroundColor: 'yellow.200',
        color: 'neutral.900',
      },
      info: {
        backgroundColor: 'blue.200',
        color: 'textPrimary',
      },
    },
  },
})
