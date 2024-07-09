import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Contact } from '../contact'
import styles from './wrapper.module.scss'
import { Console } from '~/components/console'
import { Navigation } from '~/components/navigation'
import { Home } from '~/pages/home'
import { About } from '~/pages/about'
import { Portfolio } from '~/pages/portfolio'
import { Resume } from '~/pages/resume'
import { useNavigationContext } from '~/providers/contexts/navigation-context'

export type Refs = Record<
  'home' | 'about' | 'portfolio' | 'resume' | 'contact',
  React.RefObject<HTMLElement>
>

interface WrapperProps {}

export function Wrapper(props: WrapperProps) {
  const { navigation } = useNavigationContext()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  /*  useEffect(() => {
    navigation.home.action();
  }, []); */

  return (
    <>
      <Console />
      <Navigation
        progressBar={
          <motion.div className={styles.progress} style={{ scaleX }} />
        }
      />
      <section className={styles.base}>
        <Home ref={navigation.home.ref} />
        <About ref={navigation.about.ref} />
        <Portfolio ref={navigation.portfolio.ref} />
        <Resume ref={navigation.resume.ref} />
        <Contact ref={navigation.contact.ref} />
      </section>
    </>
  )
}
