import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import styles from '~/components/navigation/navigation.module.scss';

interface MainMenuProps {}

const variants: Variants = {
  hover: {
    maxWidth: 50,
    marginLeft: '0.5rem',
    visibility: 'visible',
  },
  initial: {
    maxWidth: 0,
    marginLeft: 0,
    visibility: 'hidden',
  },
};

export const MainMenu = ({ ...props }: MainMenuProps) => {
  const controls = useAnimation();
  function handleMouseEnterControls() {
    void controls.start('hover');
  }

  function handleMouseLeaveControls() {
    void controls.start('initial');
  }
  return (
    <motion.div
      className={styles.menu_hold}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.menu_hold_icon}>
        <hr />
        <hr />
        <hr />
      </div>
      <motion.div
        className={styles.menu_hold_label}
        animate={controls}
        variants={variants}
        transition={{ delay: 0.1 }}
      >
        <span>MENU</span>
      </motion.div>
    </motion.div>
  );
};
