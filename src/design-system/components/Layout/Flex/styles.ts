import { cva, type RecipeVariantProps } from '@styled-system/css'
import { token } from '@styled-system/tokens'

export const flexStyles = cva({
  base: {
    display: 'flex',
  },
  variants: {
    gap: {
      spacing2: {
        gap: token('spacing.2'),
      },
      spacing4: {
        gap: token('spacing.4'),
      },
      spacing8: {
        gap: token('spacing.8'),
      },
      spacing12: {
        gap: token('spacing.12'),
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
  },
})

export type FlexVariants = RecipeVariantProps<typeof flexStyles>