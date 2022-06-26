import * as React from 'react';
import styles from '@components/menu/menu-styles.module.scss';
import { MenuTile } from '@components/menu/menu-tile/menu-tile';

interface IProps {
}

export const Menu: React.FC<IProps> = (props: IProps) => {
  const renderMenu: Array<string> = ['Home', 'About', 'Portfolio', 'See More'];
  return (
    <>
      <section className={styles.menuContainer}>
        {renderMenu.map((tile, i) => <MenuTile key={`menuTile${i}`} tileName={tile} />)}
      </section>
    </>
  );
};
