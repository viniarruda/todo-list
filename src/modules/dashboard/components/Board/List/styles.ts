import { Flex } from '@/design-system/components'
import { styled } from '@styled-system/jsx'

export const Container = styled(Flex, {
  base: {
    flexDirection: 'column',
    flex: 1,
    // flexGrow: 0,
    // flexShrink: 0,
    // flexBasis: 200,

    padding: '2',

    '& + div': {
      borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    },
  },

  variants: {
    done: {
      true: {
        opacity: 0.6,
      },
      false: {
        opacity: 1,
      },
    },
  },

  defaultVariants: {
    done: false,
  },
})

export const Header = styled(`header`, {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '42px',
    marginBottom: '5',
  },
})

export const ButtonIcon = styled(`button`, {
  base: {
    width: '42px',
    height: '42px',
    cursor: 'pointer',
    borderRadius: 'md',
    backgroundColor: 'blue.400',
    border: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
