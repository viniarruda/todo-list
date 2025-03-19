'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { css, cx } from '@styled-system/css'
import { motion, AnimatePresence } from 'framer-motion'

import { colors } from '@/design-system/theme/shared/colors'

import { Toast } from './types'

import { container, toastClass } from './styles'

// Toast Context
const ToastContext = createContext<{
  open: (
    message: string,
    options?: { duration?: number; variant?: Toast['variant'] },
  ) => void
} | null>(null)

// Provider Component
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const open = (
    message: string,
    options?: { duration?: number; variant?: Toast['variant'] },
  ) => {
    const id = Date.now()
    const duration = options?.duration || 3000 // Default duration
    const variant = options?.variant || 'default' // Default is gray

    setToasts(prev => [...prev, { id, message, duration, variant }])

    // Remove after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, duration)
  }

  const getColor = (variant: Toast['variant']) => {
    const colorsObj = {
      success: colors.feedbackSuccess,
      error: colors.feedbackError,
      default: colors.backgroundPrimary,
    }

    return colorsObj[variant]
  }

  return (
    <ToastContext.Provider value={{ open }}>
      {children}

      {/* Toast Container (Global Positioning) */}
      <div className={container}>
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={toastClass({ variant: toast.variant })}
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

// Custom Hook for using Toast
export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
