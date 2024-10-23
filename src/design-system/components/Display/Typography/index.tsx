import { styled } from '@styled-system/jsx'

export const Typography = styled('p', {
  base: {
    lineHeight: `$default`,
    margin: `0`,
    fontVariantNumeric: `tabular-nums`,
    display: `block`,
  },

  variants: {
    align: {
      left: {
        textAlign: `left`,
      },
      center: {
        textAlign: `center`,
      },
      right: {
        textAlign: `right`,
      },
      inherit: {
        textAlign: `inherit`,
      },
    },
  },
})

export const Title = styled('h1', {
  base: {
    lineHeight: `$default`,
    margin: `0`,
    fontVariantNumeric: `tabular-nums`,
    display: `block`,

    fontSize: '5xl',
    fontWeight: 'bold',
  },

  variants: {
    align: {
      left: {
        textAlign: `left`,
      },
      center: {
        textAlign: `center`,
      },
      right: {
        textAlign: `right`,
      },
      inherit: {
        textAlign: `inherit`,
      },
    },
  },
})
