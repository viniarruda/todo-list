import { css } from '@styled-system/css'

export const container = css({ position: 'relative', width: '100%' })

export const selectBox = css({
  backgroundColor: 'gray.700',
  color: 'white',
  padding: '10px',
  borderRadius: 'md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  borderWidth: '1px',
  borderColor: 'gray.600',
  _hover: { backgroundColor: 'gray.600' },
})

export const dropDownMenu = css({
  position: 'absolute',
  top: '110%',
  left: 0,
  width: '100%',
  backgroundColor: 'gray.800',
  borderRadius: 'md',
  boxShadow: 'lg',
  overflow: 'hidden',
  zIndex: 1000,
})

export const optionItem = css({
  padding: '10px',
  cursor: 'pointer',
  _hover: { backgroundColor: 'gray.600' },
})
