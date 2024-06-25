import React, { FC, PropsWithChildren } from 'react';
import styles from './resume.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface ResumeProps {}

export const Resume: FC<PropsWithChildren<ResumeProps>> = () => {
  return (
    <section className={styles.resume}>
      <PageLabel className={styles.resume_label} label="resume" />
    </section>
  );
};
