import type { ForwardedRef } from 'react'
import React, { forwardRef } from 'react'
import styles from './resume.module.scss'
import { PageLabel } from '~/components/label/PageLabel'

interface ResumeProps {}

export const Resume = forwardRef((props: ResumeProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section className={styles.resume} ref={ref}>
      <PageLabel className={styles.resume_label} label="resume" />
    </section>
  )
})
