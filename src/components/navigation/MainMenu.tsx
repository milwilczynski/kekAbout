import React, { useCallback, useState } from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from '~/components/navigation/navigation.module.scss';
import { MenuRow, MenuRowProps } from '~/components/navigation/MenuRow';

interface MainMenuProps {}

export const MainMenu = ({ ...props }: MainMenuProps) => {
  const [menuList] = useState<Array<MenuRowProps>>([
    { icon: faLocationDot, label: 'Home' },
    { icon: faLocationDot, label: 'Resume' },
    { icon: faLocationDot, label: 'Portfolio' },
    { icon: faLocationDot, label: 'About Me' },
  ]);

  const renderMenu = useCallback(({ icon, label }: MenuRowProps) => {
    return <MenuRow icon={icon} label={label} key={label} />;
  }, []);
  return (
    <section className={styles.menu_holder}>
      {menuList.map((row) => {
        return renderMenu(row);
      })}
    </section>
  );
};
