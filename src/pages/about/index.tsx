import React, { forwardRef } from 'react'
import styles from './about.module.scss'
import { PageLabel } from '~/components/label/PageLabel'

interface AboutProps {}

export const About = forwardRef((props, ref) => {
  return (
    <section className={styles.about}>
      <PageLabel className={styles.about_label} label="about" />
    </section>
  )
})
