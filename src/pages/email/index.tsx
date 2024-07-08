import React, { type ForwardedRef, forwardRef } from 'react';
import styles from './email.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface EmailProps {}

export const Email = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section className={styles.email} ref={ref}>
      <PageLabel className={styles.email_label} label="email" />
    </section>
  );
});
