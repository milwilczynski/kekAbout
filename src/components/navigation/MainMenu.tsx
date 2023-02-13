import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import styles from '~/components/navigation/navigation.module.scss';

interface MainMenuProps {
  handleClick: () => void;
}

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

export const MainMenu = ({ handleClick }: MainMenuProps) => {
  const controls = useAnimation();

  function handleMouseEnterControls(state: string) {
    void controls.start(state);
  }

  return (
    <motion.div
      initial={false}
      className={styles.menu_hold}
      onMouseEnter={() => {
        handleMouseEnterControls('hover');
      }}
      onMouseLeave={() => {
        handleMouseEnterControls('initial');
      }}
      whileTap={{ scale: 1.1 }}
      onClick={handleClick}
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
