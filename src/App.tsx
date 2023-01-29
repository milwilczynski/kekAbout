import React from 'react';
import Navigation from '~/components/navigation';
import styles from './app.module.scss';

const App = () => {
  return (
    <>
      <div className={styles.bg} />
      <div className={styles.bg + styles.bg_second} />
      <div className={styles.bg + styles.bg_third} />
      <Navigation />
    </>
  );
};

export default App;
