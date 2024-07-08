import React, { type ForwardedRef, forwardRef } from 'react';
import styles from './portfolio.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface PortfolioProps {}

export const Portfolio = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section className={styles.portfolio} ref={ref}>
      <PageLabel className={styles.portfolio_label} label="portfolio" />
    </section>
  );
});
