import React, { FC, PropsWithChildren, useRef } from 'react';
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import styles from './home.module.scss';
import { ReactComponent as GearSVG } from '~/assets/gear.svg';

interface HomeProps {}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Home: FC<PropsWithChildren<HomeProps>> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);
  const refView = useRef(null);
  const isInView = useInView(refView);

  return (
    <section className={styles.home} ref={ref}>
      <motion.div
        className={styles.home_label}
        ref={refView}
        style={{
          left: isInView ? '2rem' : '-150px',
          opacity: isInView ? 1 : 0,
          transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          y,
        }}
      >
        <span>{'>'}</span>
        <span>.host</span>
        <span>()</span>
      </motion.div>
      <motion.div className={styles.home_animation}>
        <motion.div>
          <span>{'>'}</span>
          <motion.span
            className={styles.home_animation_underscore}
            animate={{ opacity: [0, 1] }}
            transition={{
              delay: 1,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'linear',
              duration: 0.5,
            }}
          >
            _
          </motion.span>
          <motion.div>
            <GearSVG />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className={styles.home_img_wrapper}>
        <motion.div
          ref={refView}
          style={{
            height: isInView ? '100%' : '0%',
            opacity: isInView ? 1 : 0,
            transition: 'all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className={styles.home_img_border}
        />
        <motion.div
          ref={refView}
          style={{
            transform: isInView ? 'none' : 'translateY(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className={styles.home_img}
        />
      </div>
      <div className={styles.home_wrapper}>{/* <Console /> */}</div>
    </section>
  );
};
