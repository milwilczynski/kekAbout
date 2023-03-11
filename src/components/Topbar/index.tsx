import React, { useEffect, useState } from 'react';
import styles from './topbar.module.scss';
import { getFormattedTime } from '~/utils/timeHelper';

interface TopbarProps {}

export const Topbar = (props: TopbarProps) => {
  const [actualTime, setActualTime] = useState<string>(getFormattedTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setActualTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id={styles.topbar}>
      <div>{actualTime}</div>
    </section>
  );
};
