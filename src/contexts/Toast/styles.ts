import { css, cva } from '@styled-system/css'

export const container = css({
  position: 'fixed',
  top: '20px',
  right: '20px',
  zIndex: 1000,
})

export const toastClass = cva({
  base: {
    color: 'white',
    padding: '12px 16px',
    borderRadius: 'md',
    boxShadow: 'lg',
    marginBottom: '8px',
  },

  variants: {
    variant: {
      success: {
        backgroundColor: 'feedbackSuccess',
      },
      error: {
        backgroundColor: 'feedbackError',
      },
      default: {
        backgroundColor: 'backgroundPrimary',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
