import React, { type ForwardedRef, forwardRef, useEffect } from 'react';
import styles from './home.module.scss';
import { PageLabel } from '~/components/label/PageLabel';
import { useConsoleContext } from '~/providers/contexts/console-context';

interface HomeProps {}

export const Home = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  const terminal = useConsoleContext();

  const log = () => {
    console.log('ES');
  };
  useEffect(() => {
    terminal.state.doAction('_initHome()', log);
  }, []);

  return (
    <section className={styles.home} ref={ref}>
      <button
        onClick={() => {
          terminal.state.doAction('asfasdfasdf()', () => {
            console.log('I did that shit bro');
          });
        }}
      >
        ELO
      </button>
      <PageLabel className={styles.home_label} label="home" />
      <div className={styles.home_wrapper}>{/* <Console /> */}</div>
    </section>
  );
});
