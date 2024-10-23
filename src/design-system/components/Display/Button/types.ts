import { ButtonVariants } from "./styles"

export type ButtonProps = ButtonVariants & {
  children: React.ReactNode
  type?: 'submit' | 'button'
}