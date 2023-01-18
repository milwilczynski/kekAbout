import React from 'react';
import styles from './navigation.module.scss';
import { Socials } from '~/components/navigation/Socials';
import { MainMenu } from '~/components/navigation/MainMenu';

function Navigation() {
  return (
    <section id={styles.navigation}>
      <MainMenu />
      <Socials />
    </section>
  );
}

export default Navigation;
