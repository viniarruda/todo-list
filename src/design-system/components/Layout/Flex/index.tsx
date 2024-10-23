import { FlexProps } from './types'
import { flexStyles } from './styles'

export const Flex = ({ children, ...props }: FlexProps) => (
  <div className={flexStyles()} {...props}>{children}</div>
)