import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '~/components/navigation/navigation.module.scss';
import { MenuRow, MenuRowProps } from '~/components/navigation/MenuRow';

interface MainMenuProps {}

export function MainMenu(props: MainMenuProps) {
  const [menuList] = useState<Array<MenuRowProps>>([
    { icon: faHome, label: 'Home' },
    { icon: faHome, label: 'Home' },
    { icon: faHome, label: 'Home' },
    { icon: faHome, label: 'Home' },
  ]);

  const renderMenu = useCallback(({ icon, label }: MenuRowProps) => {
    return <MenuRow icon={icon} label={label} />;
  }, []);
  return (
    <section className={styles.menu_holder}>
      {menuList.map((row) => renderMenu(row))}
    </section>
  );
}
