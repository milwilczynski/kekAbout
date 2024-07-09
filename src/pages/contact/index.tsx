import React, { type ForwardedRef, forwardRef } from 'react'
import styles from './contact.module.scss'
import { PageLabel } from '~/components/label/PageLabel'

interface ContactProps {}

export const Contact = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section className={styles.email} ref={ref}>
      <PageLabel className={styles.email_label} label="contact" />
    </section>
  )
})
