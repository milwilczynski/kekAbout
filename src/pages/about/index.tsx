import React, { FC, PropsWithChildren } from 'react';
import styles from './about.module.scss';
import { PageLabel } from '~/components/PageLabel';

interface AboutProps {}

export const About: FC<PropsWithChildren<AboutProps>> = () => {
  return (
    <section className={styles.about}>
      <PageLabel className={styles.about_label} label="about" />
    </section>
  );
};
