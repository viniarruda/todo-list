import { css, cva, RecipeVariantProps } from '@styled-system/css'

export const buttonStyles = cva({
  base: {
    cursor: 'pointer',
    borderRadius: 'sm',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
  variants: {
    variant: {
      success: {
        bg: 'feedbackSuccess',
        color: 'textPrimary',

        '&:hover': {
          bg: 'green.400',
        },
      },
      error: {
        bg: 'feedbackError',
        color: 'textPrimary',

        '&:hover': {
          bg: 'red.400',
        },
      },
      default: {
        bg: 'backgroundTertiary',
        color: 'textPrimary',

        '&:hover': {
          bg: 'backgroundSecondary',
        },
      },
    },
    size: {
      small: {
        height: '8',
        px: '16',
        fontSize: 'sm',
      },
      medium: {
        height: '10',
        px: '24',
        fontSize: 'md',
      },
      large: {
        height: '12',
        px: '24',
        fontSize: 'lg',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
})

export const iconContainer = css({
  marginLeft: '1',
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>
