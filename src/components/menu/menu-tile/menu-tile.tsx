import * as React from 'react';
import styles from '@components/menu/menu-tile/menu-tile-styles.module.scss';


interface IProps {
  tileName: string;
}

export const MenuTile: React.FC<IProps> = (props: IProps) => (
  <div className={styles.menuTile}>
    <div className={styles.menuTileTitle}>
      <div>
        <span>{props.tileName.toUpperCase()}</span>
      </div>
      <div className={styles.menuTileMark} />
    </div>
  </div>
);