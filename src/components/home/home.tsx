import * as React from 'react';
import { Menu } from '@components/menu/menu';
import styles from './home-styles.module.scss';

export const Home: React.FC = () => (
  <section className={styles.mainContainer}>
    <Menu />
  </section>
);
 