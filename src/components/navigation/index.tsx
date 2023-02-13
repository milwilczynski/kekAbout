import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './navigation.module.scss';
import { MenuSocials } from '~/components/navigation/MenuSocials';
import { MainMenu } from '~/components/navigation/MainMenu';
import { Menu } from '~/components/navigation/Menu';

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const setMenu = () => {
    setIsMenuVisible((state) => {
      return !state;
    });
  };

  return (
    <section id={styles.navigation}>
      <motion.div layout>
        {isMenuVisible ? (
          <Menu handleClick={setMenu} />
        ) : (
          <MainMenu handleClick={setMenu} />
        )}
      </motion.div>
      <MenuSocials />
    </section>
  );
};

export default Navigation;
