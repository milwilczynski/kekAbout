import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from '~/components/navigation/menu.module.scss';

interface MenuProps {}

export function Menu(props: MenuProps) {
  return (
    <div id={styles.menu}>
      <div className={styles.icon_container}>
        <div className={styles.icon_backdrop}>
          <FontAwesomeIcon
            icon={faHome}
            className={`${styles.icon} ${styles.icon_selected}`}
          />
        </div>
        <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
        <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
      </div>
    </div>
  );
}
