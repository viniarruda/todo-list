import { ButtonProps } from './types'

import { buttonStyles } from './styles'

export const Button = ({ type = 'submit', children, ...props }: ButtonProps) => {
  return (
    <button type={type} className={buttonStyles(props)}>{children}</button>
  )
}