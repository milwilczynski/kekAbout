import React, { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import styles from '~/pages/home/home.module.scss';

interface UnderscoreProps {}

export const Underscore: FC<PropsWithChildren<UnderscoreProps>> = () => {
  return (
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
  );
};
