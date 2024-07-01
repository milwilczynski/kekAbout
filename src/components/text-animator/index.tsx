import type { FC, PropsWithChildren } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import { CursorBlinker } from '../cursor-blinker'
import { useConsoleContext } from '~/providers/contexts/console-context'

interface TextAnimatorProps {
}

export const TextAnimator: FC<PropsWithChildren<TextAnimatorProps>> = () => {
  const terminal = useConsoleContext()
  return (
    <>
      <motion.span>{terminal.animation.displayText}</motion.span>
      <CursorBlinker />
    </>
  )
}
