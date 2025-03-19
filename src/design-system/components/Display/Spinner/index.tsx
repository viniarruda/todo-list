import { motion } from 'framer-motion'

import { style } from './styles'

export const Spinner = ({ show }: { show: boolean }) => {
  if (!show) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, repeat: Infinity }}
      className={style()}
    />
  )
}
