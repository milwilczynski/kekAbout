import React, { type ForwardedRef, forwardRef } from 'react';
import styles from './about.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface AboutProps {}

export const About = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section className={styles.about} ref={ref}>
      <PageLabel className={styles.about_label} label="about" />
    </section>
  );
});
