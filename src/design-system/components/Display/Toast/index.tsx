import { useState } from 'react'
import { css, cx } from '@styled-system/css'
import { motion } from 'framer-motion'

export const Toast = ({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cx(
        css({
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'black',
          color: 'white',
          padding: '12px 16px',
          borderRadius: 'md',
          boxShadow: 'lg',
          zIndex: '1000',
        }),
      )}
    >
      {message}
      <button
        className={css({
          marginLeft: '12px',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
        })}
        onClick={onClose}
      >
        ✖
      </button>
    </motion.div>
  )
}
