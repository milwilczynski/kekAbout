import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import styles from '~/app.module.scss';

function App() {
  return (
    <>
      <section id={styles.navigation}>
        <section className="" />
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
      </section>
      <section id="body" />
    </>
  );
}

export default App;
