import type { FC, PropsWithChildren } from 'react';
import React, { useRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { TextAnimator } from '../text-animator';
import styles from './console.module.scss';
import useScreenDimension from '~/hooks/useScreenDimension';
import { useConsoleContext } from '~/providers/contexts/console-context';

interface ConsoleProps {}

export const Console: FC<PropsWithChildren<ConsoleProps>> = () => {
  const terminal = useConsoleContext();
  const parentRef = useRef<HTMLDivElement>(null);
  const { height } = useScreenDimension();

  const variants = {
    minimalized: {
      height: 50,
      width: 50,
      x: '1rem',
      y: height - 125,
    },
    maximized: {
      height: '30%',
      width: '40%',
      x: terminal.position.window.x,
      y: terminal.position.window.y,
    },
  };

  return (
    <motion.div className={`${styles.console_wrapper}`} ref={parentRef}>
      <AnimatePresence initial presenceAffectsLayout mode="sync">
        {!terminal.position.isMinimalized && (
          <motion.div
            ref={terminal.state.consoleRef}
            animate="maximized"
            transition={{
              type: 'easeInOut',
            }}
            variants={variants}
            drag
            dragConstraints={parentRef}
            dragElastic={1}
            dragMomentum={false}
            className={`${styles.window}`}
          >
            <motion.div
              className={styles.window_bar}
              whileTap={{ cursor: 'grabbing' }}
              whileHover={{ cursor: 'grab' }}
            >
              <div />
              <div className={styles.window_bar_title}>Terminal</div>
              <div className={styles.window_bar_wrapper}>
                <button
                  className={styles.window_bar_wrapper_btn}
                  onClick={terminal.position.minimalize}
                />
              </div>
            </motion.div>
            <div className={styles.window_section}>
              <TextAnimator />
            </div>
          </motion.div>
        )}
        {terminal.position.isMinimalized && (
          <motion.div
            className={styles.window_minimalized}
            onClick={terminal.position.maximize}
            animate="minimalized"
            variants={variants}
            transition={{
              type: 'easeInOut',
            }}
          >
            <motion.div whileHover={{ cursor: 'pointer' }}>
              <span>{'>'}</span>
              <motion.span
                className={styles.window_minimalized_underscore}
                animate={{ opacity: [0, 1] }}
                transition={{
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'linear',
                  duration: 0.5,
                }}
              >
                _
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
