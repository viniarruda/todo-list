import { ButtonVariants } from './styles'

export type ButtonProps = ButtonVariants & {
  children?: React.ReactNode
  type?: 'submit' | 'button'
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  endIcon?: React.ReactNode
}
