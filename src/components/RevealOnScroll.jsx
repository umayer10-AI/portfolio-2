'use client'

import { motion } from 'framer-motion'

export default function RevealOnScroll({ children, className = '', delay = 0, direction = 'up' }) {
  const directionVariants = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: -60 },
    right: { x: 60 },
    none: { y: 30 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionVariants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
