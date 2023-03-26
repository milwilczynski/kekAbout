import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './app.module.scss';
import { Navigation } from '~/components/navigation';
import { Home } from '~/pages/home';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <section className={styles.base}>
        <Home />
      </section>
      <Navigation
        progressBar={
          <motion.div className={styles.progress} style={{ scaleX }} />
        }
      />
    </>
  );
};

export default App;
