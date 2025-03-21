import { cva } from '@styled-system/css'

export const container = cva({
  base: {
    position: 'relative',
  },
})

export const menu = cva({
  base: {
    position: 'absolute',
    right: 0,
    marginTop: '2px',
    minWidth: '100px',
    borderRadius: 'sm',
    border: '1px solid #949494',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
})

export const menuItem = cva({
  base: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'textTertiary',
    padding: '4px 8px',
    width: '100%',
    justifyContent: 'flex-start',

    _hover: {
      backgroundColor: 'neutral.100',
    },
  },
})
