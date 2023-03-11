import React from 'react';
import styles from './console.module.scss';

interface ConsoleProps {}

export const Console = (props: ConsoleProps) => {
  return (
    <section className={styles.console}>
      <div className={styles.console_bar}>Terminal</div>
      <div className={styles.console_container}>container</div>
    </section>
  );
};
