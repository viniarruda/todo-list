import { cva } from '@styled-system/css'
import { styled } from '@styled-system/jsx'

export const board = cva({
  base: {
    display: 'flex',
    padding: '0 30px',
    marginTop: '8',
    width: 'calc(100lvw - 200px)',
    overflowX: 'auto',
    gap: '2',

    _scrollbar: {
      width: '4',
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
})
