import React, { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import styles from './app.module.scss';
import { Navigation } from '~/components/navigation';
import { Home } from '~/pages/home';
import { About } from '~/pages/about';
import { Portfolio } from '~/pages/portfolio';
import { Resume } from '~/pages/resume';
import { Email } from '~/pages/email';

const App = () => {
  const { scrollYProgress } = useScroll();
  const refView = useRef(null);
  const isInView = useInView(refView);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className={styles.app_line_wrapper}>
        <motion.div
          className={styles.app_line}
          ref={refView}
          style={{
            height: isInView ? '100%' : '0%',
            opacity: isInView ? 1 : 0,
            transition: 'all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
      </div>
      <Navigation
        progressBar={
          <motion.div className={styles.progress} style={{ scaleX }} />
        }
      />
      <section className={styles.base}>
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Email />
      </section>
    </>
  );
};

export default App;
