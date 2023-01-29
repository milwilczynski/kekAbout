import React from 'react';
import styles from './navigation.module.scss';
import { MenuSocials } from '~/components/navigation/MenuSocials';

const Navigation = () => {
  return (
    <section id={styles.navigation}>
      {/* <MainMenu /> */}
      <div className={styles.menu_hold}>
        <div className={styles.menu_hold_icon}>
          <hr />
          <hr />
          <hr />
        </div>
        <div className={styles.menu_hold_label}>
          <span>MENU</span>
        </div>
      </div>
      <MenuSocials />
    </section>
  );
};

export default Navigation;
