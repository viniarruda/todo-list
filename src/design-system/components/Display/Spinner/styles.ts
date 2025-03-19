import { cva } from '@styled-system/css'

export const style = cva({
  base: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: 'full',
    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    borderTopColor: 'blue.500',
    animation: 'spin 1s linear infinite',
    zIndex: 2000,
  },
})
