import React, { FC, PropsWithChildren } from 'react';
import styles from './email.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface EmailProps {}

export const Email: FC<PropsWithChildren<EmailProps>> = () => {
  return (
    <section className={styles.email}>
      <PageLabel className={styles.email_label} label="email" />
    </section>
  );
};
