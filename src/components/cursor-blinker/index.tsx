import type { FC, PropsWithChildren } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './cursor-blinker.module.scss'

interface CursorBlinkerProps {
}

export const CursorBlinker: FC<PropsWithChildren<CursorBlinkerProps>> = ({}: CursorBlinkerProps) => {
  return (
    <motion.div
      animate={{ opacity: [0, 0, 1, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: 'linear',
        times: [0, 0.5, 0.5, 1],
      }}
      className={styles.blinker}
    />
  )
}
