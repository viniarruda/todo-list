type Option = {
  label: string
  value: string
}

export type SelectProps = {
  options: Option[]
  placeholder?: string
  onChange?: (value: string) => void
  value: string
}
