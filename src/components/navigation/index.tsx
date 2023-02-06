import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import styles from './navigation.module.scss';
import { MenuSocials } from '~/components/navigation/MenuSocials';
import { MainMenu } from '~/components/navigation/MainMenu';

const Navigation = () => {
  return (
    <section id={styles.navigation}>
      <MainMenu />
      <MenuSocials />
    </section>
  );
};

export default Navigation;
