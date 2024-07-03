import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import styles from './app.module.scss'
import { Console } from './components/console'
import { Navigation } from '~/components/navigation'
import { Home } from '~/pages/home'
import { About } from '~/pages/about'
import { Portfolio } from '~/pages/portfolio'
import { Resume } from '~/pages/resume'
import { Email } from '~/pages/email'

function App() {
  const aboutRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <>
      <Console />
      <Navigation
        progressBar={
          <motion.div className={styles.progress} style={{ scaleX }} />
        }
      />
      <section className={styles.base}>
        <button onClick={() => {
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
        }}
        >
          siema
        </button>
        <Home />
        <About />
        <Portfolio />
        <Resume ref={aboutRef} />
        <Email />
      </section>
    </>
  )
}

export default App
