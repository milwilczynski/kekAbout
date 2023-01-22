import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from '~/components/navigation/navigation.module.scss';

interface MainMenuProps {}

export function MainMenu(props: MainMenuProps) {
  return (
    <section className={styles.menu_holder}>
      <div className={styles.menu_holder_row}>
        <div className={styles.menu_holder_row_icon}>
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className={styles.menu_holder_row_label}>
          <span>Home</span>
        </div>
      </div>
      <div className={styles.menu_holder_row}>
        <div className={styles.menu_holder_row_icon}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className={styles.menu_holder_row_label}>
          <span>About Me</span>
        </div>
      </div>
      <div className={styles.menu_holder_row}>
        <div className={styles.menu_holder_row_icon}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className={styles.menu_holder_row_label}>
          <span>Portfolio</span>
        </div>
      </div>
      <div className={styles.menu_holder_row}>
        <div className={styles.menu_holder_row_icon}>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className={styles.menu_holder_row_label}>
          <span>Resume</span>
        </div>
      </div>
    </section>
  );
}
