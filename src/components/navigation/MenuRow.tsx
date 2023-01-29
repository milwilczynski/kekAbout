import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '~/components/navigation/navigation.module.scss';

export interface MenuRowProps {
  icon: IconProp;
  label?: string;
  handleClick?: () => void;
}

export const MenuRow = ({ icon, label, handleClick }: MenuRowProps) => {
  if (handleClick) {
    return (
      <div
        role="presentation"
        className={styles.socials_holder_socials_icon}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  }
  return (
    <div role="presentation" className={styles.menu_holder_row}>
      <div className={styles.menu_holder_row_icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.menu_holder_row_label}>
        <span>{label}</span>
      </div>
    </div>
  );
};
