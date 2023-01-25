import React from 'react';
import {
  faDiscord,
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './navigation.module.scss';
import config from '~/utils/config';
import { MenuRow } from '~/components/navigation/MenuRow';

interface SocialsProps {}

export const MenuSocials = ({ ...props }: SocialsProps) => {
  const redirect = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <section className={styles.socials_holder}>
      <div className={styles.socials_holder_socials}>
        <MenuRow
          icon={faFacebookF}
          handleClick={() => {
            return redirect(config.socials.facebook);
          }}
          isSocialsMenu
        />
        <MenuRow
          icon={faLinkedinIn}
          handleClick={() => {
            return redirect(config.socials.linkedIn);
          }}
          isSocialsMenu
        />
        <MenuRow
          icon={faGithub}
          handleClick={() => {
            return redirect(config.socials.github);
          }}
          isSocialsMenu
        />
        <MenuRow
          icon={faTwitter}
          handleClick={() => {
            return redirect(config.socials.twitter);
          }}
          isSocialsMenu
        />
        <MenuRow
          icon={faDiscord}
          handleClick={() => {
            return redirect(config.socials.discord);
          }}
          isSocialsMenu
        />
      </div>
    </section>
  );
};
