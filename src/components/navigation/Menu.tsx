import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styles from '~/components/navigation/navigation.module.scss';

interface MenuProps {
  handleClick: () => void;
}

export const Menu = ({ handleClick }: MenuProps) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_rows}>
        <div>HOME</div>
        <div>ABOUT ME</div>
        <div>GALLERY</div>
        <div>RESUME</div>
        <div>CONTACT</div>
      </div>
      <button type="button" onClick={handleClick}>
        <motion.div>
          <FontAwesomeIcon className="fa-xl" icon={faSortUp} />
        </motion.div>
      </button>
    </div>
  );
};
