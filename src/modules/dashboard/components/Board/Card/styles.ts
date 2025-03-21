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

  variants: {
    isDragging: {
      true: {
        border: '2px dashed rgba(255, 255, 255, 0.2)',
        paddingTop: '50px',
        borderRadius: 'inherit',
        background: 'transparent',
        boxShadow: 'none',
        cursor: 'grabbing',

        '& p, & span, & header': {
          opacity: 0,
        },
      },
      false: {},
    },
  },
})

export const Header = styled(`header`, {
  base: {
    position: 'absolute',
    top: '-38px',
    left: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
})

export const EmptyCard = styled(Flex, {
  base: {
    border: '2px dashed rgba(255, 255, 255, 0.2)',
    borderRadius: 'inherit',
    background: 'transparent',
    boxShadow: 'none',
    height: '130px',
    minHeight: '130px',
  },
})

export const OptionsMenu = styled('div', {
  base: {
    cursor: 'pointer',
  },
})

export const Divisor = styled('div', {
  base: {
    width: '100%',
    height: '1px',
    backgroundColor: 'neutral.200',
    my: '0.5',
  },
})
