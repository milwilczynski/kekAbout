import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { animated } from '@react-spring/web';
import styles from './menu.module.scss';
import { Icon, IconProps } from '~/components/Navigation/Menu/Icon';

interface MenuProps {}

const AppList: IconProps[] = [
  { label: 'es1', icon: 'es' },
  { label: 'es2', icon: 'es' },
  { label: 'es3', icon: 'es' },
  { label: 'es4', icon: 'es' },
];

export const Menu = (props: MenuProps) => {
  const [show, setShow] = useState<boolean>(true);

  const toggleMenu = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div className={`${styles.menu} ${!show && styles.menu_close}`}>
      <Icon
        handleClick={toggleMenu}
        label="es"
        icon={<FontAwesomeIcon icon={faBars} size="2x" />}
      />
      {show && (
        <animated.div>
          {AppList.map((app) => {
            return <Icon label={app.label} icon={app.label} key={app.label} />;
          })}
        </animated.div>
      )}
      <div />;
    </div>
  );
};
