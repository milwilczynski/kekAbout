import React, { FC, PropsWithChildren, useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './console.module.scss';

interface ConsoleProps {}

export const Console: FC<PropsWithChildren<ConsoleProps>> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className={styles.window}
    >
      <div className={styles.window_bar}>
        <div />
        <div className={styles.window_bar_title}>Terminal</div>
        <div className={styles.window_bar_wrapper}>
          <div className={styles.window_bar_wrapper_btn} />
          <div className={styles.window_bar_wrapper_btn} />
          <div className={styles.window_bar_wrapper_btn} />
        </div>
      </div>
      <div className={styles.window_section}>Welcome</div>
    </section>
  );
};
