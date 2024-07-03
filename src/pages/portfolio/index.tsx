import React, { forwardRef } from 'react'
import styles from './portfolio.module.scss'
import { PageLabel } from '~/components/label/PageLabel'

interface PortfolioProps {}

export const Portfolio = forwardRef((props, ref) => {
  return (
    <section className={styles.portfolio}>
      <PageLabel className={styles.portfolio_label} label="portfolio" />
    </section>
  )
})
