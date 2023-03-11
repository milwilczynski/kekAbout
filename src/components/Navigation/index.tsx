import React from 'react';
import styles from './navigation.module.scss';
import { Menu } from '~/components/Navigation/Menu';

interface NavigationProps {}

export const Navigation = (props: NavigationProps) => {
  return (
    <section id={styles.navigation}>
      <Menu />
    </section>
  );
};
