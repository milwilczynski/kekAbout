import React from 'react';
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
