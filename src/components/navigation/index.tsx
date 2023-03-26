import React, { FC, PropsWithChildren, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './navigation.module.scss';
import { MenuList } from '~/mocks/menuList';

interface NavigationProps {
  progressBar: React.ReactNode;
}

export const Navigation: FC<PropsWithChildren<NavigationProps>> = ({
  progressBar,
}: NavigationProps) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section className={styles.navigation}>
      {progressBar}
      <AnimatePresence>
        <motion.div className={styles.navigation_btn_container}>
          {MenuList.map((item) => {
            return (
              <motion.div
                key={item.id}
                role="presentation"
                className={`${styles.navigation_btn}`}
                onClick={() => {
                  setSelected(selected);
                }}
              >
                <div>{item.label}</div>
              </motion.div>
            );
          })}
          <motion.div className={styles.navigation_label}>
            <div>{'<<'}</div>
            <div>{'>>'}</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
