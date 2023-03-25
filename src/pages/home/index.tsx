import React, { FC, PropsWithChildren, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import styles from './home.module.scss';
import { Console } from '~/components/console';

interface HomeProps {}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Home: FC<PropsWithChildren<HomeProps>> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  return (
    <section className={styles.home}>
      <div className={styles.home_img} />
      <div className={styles.home_wrapper} ref={ref}>
        <motion.div className={styles.home_label} style={{ y }}>
          host
        </motion.div>
        <Console />
      </div>
    </section>
  );
};
