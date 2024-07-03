import React, { forwardRef } from 'react'
import styles from './email.module.scss'
import { PageLabel } from '~/components/label/PageLabel'

interface EmailProps {}

export const Email = forwardRef((props, ref) => {
  return (
    <section className={styles.email}>
      <PageLabel className={styles.email_label} label="email" />
    </section>
  )
})
