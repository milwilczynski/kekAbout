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
import config from '~/utils/config';

interface SocialsProps {}

export function Socials(props: SocialsProps) {
  function redirect(url: string): void {
    window.open(url, '_blank');
  }

  return (
    <section className={styles.socials_holder}>
      <div className={styles.socials_holder_socials}>
        <div
          role="presentation"
          className={styles.socials_holder_socials_icon}
          onClick={() => redirect(config.socials.facebook)}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div
          role="presentation"
          className={styles.socials_holder_socials_icon}
          onClick={() => redirect(config.socials.linkedIn)}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div
          role="presentation"
          className={styles.socials_holder_socials_icon}
          onClick={() => redirect(config.socials.github)}
        >
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div
          role="presentation"
          className={styles.socials_holder_socials_icon}
          onClick={() => redirect(config.socials.twitter)}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div
          role="presentation"
          className={styles.socials_holder_socials_icon}
          onClick={() => redirect(config.socials.discord)}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </div>
      </div>
    </section>
  );
}
