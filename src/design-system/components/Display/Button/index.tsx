import { Loading } from '@design-system/components'

import { buttonStyles } from './styles'
import { ButtonProps } from './types'

export const Button = ({
  type = 'submit',
  children,
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} className={buttonStyles(props)} disabled={disabled}>
      {isLoading ? <Loading /> : children}
    </button>
  )
}
