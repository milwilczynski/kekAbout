import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './navigation.module.scss';

interface SocialsProps {}

export function Socials(props: SocialsProps) {
  return (
    <section className={styles.socials_holder}>
      <div className={styles.socials_holder_socials}>
        <div className={styles.socials_holder_socials_icon}>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className={styles.socials_holder_socials_icon}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className={styles.socials_holder_socials_icon}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className={styles.socials_holder_socials_icon}>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className={styles.socials_holder_socials_icon}>
          <FontAwesomeIcon icon={faDiscord} />
        </div>
      </div>
    </section>
  );
}
