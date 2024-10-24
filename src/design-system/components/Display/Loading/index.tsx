import { styled } from '@styled-system/jsx'

export const Loading = styled('div', {
  base: {
    width: '20px',
    height: '20px',
    border: '5px solid #FFF',
    marginTop: '1',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: 'spin',
  }  
})