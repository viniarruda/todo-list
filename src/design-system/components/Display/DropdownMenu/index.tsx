import { useRef, useEffect } from 'react'

import { FiTrash, FiEdit2 } from 'react-icons/fi'

import { DropDownMenuProps } from './types'
import { container, menu, menuItem } from './styles'

export const DropdownMenu = ({
  children,
  isOpen,
  setIsOpen,
  handleDelete,
  handleEdit,
}: DropDownMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className={container()} ref={menuRef}>
      {children}

      {isOpen && (
        <div className={menu()}>
          <ul>
            <li className={menuItem()} onClick={handleEdit}>
              <FiEdit2 fontSize="16px" color="#949494" />
              Editar
            </li>
            <li className={menuItem()} onClick={handleDelete}>
              <FiTrash fontSize="16px" color="#949494" />
              Excluir
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
