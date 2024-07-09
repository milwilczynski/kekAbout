import type { FC, PropsWithChildren } from 'react'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './navigation.module.scss'
import { useNavigationContext } from '~/providers/contexts/navigation-context'
import { useConsoleContext } from '~/providers/contexts/console-context'

interface NavigationProps {
  progressBar: React.ReactNode
}

export const Navigation: FC<PropsWithChildren<NavigationProps>> = ({
  progressBar,
}: NavigationProps) => {
  const terminal = useConsoleContext()
  const { navigation } = useNavigationContext()

  return (
    <section className={styles.navigation}>
      {progressBar}
      <AnimatePresence>
        <motion.div className={styles.navigation_btn_container}>
          {Object.values(navigation).map((item) => {
            return (
              <motion.div
                key={item.id}
                role="presentation"
                className={`${styles.navigation_btn}`}
                onClick={() => {
                  terminal.position.maximize()
                  terminal.state.doAction(item.methodName, () => {
                    navigation[
                      item.id as keyof typeof navigation
                    ].ref.current?.scrollIntoView({ behavior: 'smooth' })
                    setTimeout(terminal.position.minimalize, 2000)
                  })
                }}
              >
                <div>{item.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
