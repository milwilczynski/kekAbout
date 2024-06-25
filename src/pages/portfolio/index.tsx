import React, { FC, PropsWithChildren } from 'react';
import styles from './portfolio.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface PortfolioProps {}

export const Portfolio: FC<PropsWithChildren<PortfolioProps>> = () => {
  return (
    <section className={styles.portfolio}>
      <PageLabel className={styles.portfolio_label} label="portfolio" />
    </section>
  );
};
