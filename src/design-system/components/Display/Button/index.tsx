import { Loading } from '@design-system/components'

import { buttonStyles, iconContainer } from './styles'
import { ButtonProps } from './types'

export const Button = ({
  type = 'submit',
  children,
  disabled = false,
  isLoading = false,
  endIcon,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonStyles(props)}
      disabled={disabled}
    >
      {isLoading ? <Loading /> : children}
      {endIcon ? <div className={iconContainer}>{endIcon}</div> : null}
    </button>
  )
}
