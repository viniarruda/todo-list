import { Flex } from '@/design-system/components'
import { styled } from '@styled-system/jsx'

export const Container = styled(Flex, {
  base: {
    flexDirection: 'column',
    // flex: 1,
    // flexBasis: 200,
    width: '200px',
    minWidth: '200px',
    height: '700px',
    overflowY: 'auto',
    padding: '2',

    '& + div': {
      borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    },

    _scrollbar: {
      width: '2',
      height: '2',
      backgroundColor: '#888',
    },
    _scrollbarThumb: {
      backgroundColor: '#888',
      borderRadius: '$large',
    },
    _scrollbarTrack: {
      backgroundColor: 'backgroundPrimary',
      borderBottomRightRadius: '$large',
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
