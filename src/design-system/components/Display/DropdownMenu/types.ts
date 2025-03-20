export type DropDownMenuProps = {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  handleEdit: () => void
  handleDelete: () => void
}
