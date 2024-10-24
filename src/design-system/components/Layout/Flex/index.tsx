import { styled } from '@styled-system/jsx'

export const Flex = styled('div', {
  base: {
    display: 'flex',
  },
  variants: {
    gap: {
      spacing2: {
        gap: '2',
      },
      spacing4: {
        gap: '4',
      },
      spacing8: {
        gap: '8',
      },
      spacing12: {
        gap: '12',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    flex: {
      1: {
        flex: 1,
      },
      0: {
        flex: 0,
      },
      2: {
        flex: 2,
      },
      auto: {
        flex: 'auto',
      },
      initial: {
        flex: 'initial',
      },
      none: {
        flex: 'none',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    color: {
      primary: {
        color: 'textPrimary',
      },
      secondary: {
        color: 'textSecondary',
      },
      tertiary: {
        color: 'textTertiary',
      },
      inverse: {
        color: 'neutral.900',
      },
    },
    radius: {
      xs: {
        borderRadius: 'xs',
      },
      sm: {
        borderRadius: 'sm',
      },
      md: {
        borderRadius: 'md',
      },
      lg: {
        borderRadius: 'lg',
      },
      xl: {
        borderRadius: 'xl',
      },
      circle: {
        borderRadius: 'full',
      },
    },
  },
})
