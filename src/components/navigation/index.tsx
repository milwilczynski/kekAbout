import React, { FC, PropsWithChildren, useState } from 'react';
import styles from './navigation.module.scss';

interface NavigationProps {}

const menuList = [
  {
    id: 'host',
    label: '.host()',
  },
  {
    id: 'about',
    label: '.about()',
  },
  {
    id: 'portfolio',
    label: '.portfolio()',
  },
  {
    id: 'resume',
    label: '.resume()',
  },
  {
    id: 'email',
    label: '.email()',
  },
];
export const Navigation: FC<PropsWithChildren<NavigationProps>> = () => {
  const [selected, setSelected] = useState<string>('host');

  return (
    <section className={styles.navigation}>
      <div className={styles.navigation_label}>
        {'<<'} 1 / 3 {'>>'}
      </div>
      <div className={styles.navigation_btn_container}>
        {menuList.map((menu) => {
          return (
            <button
              type="button"
              style={
                { '--menu-items-count': menuList.length } as React.CSSProperties
              }
              key={menu.id}
              className={`${styles.navigation_btn} ${
                menu.id === selected ? styles.navigation_btn_selected : ''
              }`}
              onClick={() => {
                return setSelected(menu.id);
              }}
            >
              {menu.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};
