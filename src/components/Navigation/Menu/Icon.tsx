import React from 'react';
import styles from './menu.module.scss';

export interface IconProps {
  icon: string | React.ReactNode;
  label: string;
  handleClick?: () => void;
}

export const Icon = ({ icon, label, handleClick }: IconProps) => {
  return (
    <div className={styles.icon} onClick={handleClick}>
      {icon}
    </div>
  );
};
