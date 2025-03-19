import { useState, useRef, useEffect } from 'react'

import { motion } from 'framer-motion'

import { SelectProps } from './types'
import { container, dropDownMenu, optionItem, selectBox } from './styles'

export const Select = ({
  options,
  placeholder = 'Selecione uma opção',
  onChange,
  value,
}: SelectProps) => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = (value: string) => {
    setSelected(value)
    setIsOpen(false)
    if (onChange) onChange(value)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className={container}>
      {/* Select Box */}
      <div className={selectBox} onClick={() => setIsOpen(prev => !prev)}>
        {value ? options.find(opt => opt.value === value)?.label : placeholder}
        <span>▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={dropDownMenu}
        >
          {options.map(option => (
            <div
              key={option.value}
              className={optionItem}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
