import React, { ReactNode } from 'react';
import styles from './baseapp.module.scss';

interface BaseAppProps {
  label: string;
  children: ReactNode | ReactNode[];
}

export const BaseApp = ({ children, label }: BaseAppProps) => {
  return (
    <section className={styles.base_app}>
      <div className={styles.base_app_bar}>
        <div />
        <div className={styles.base_app_bar_label}>{label}</div>
        <div className={styles.base_app_bar_actions}>
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={styles.base_app_container}>{children}</div>
    </section>
  );
};
