import React from 'react';
import styles from './container.module.scss';
import { Console } from '~/components/Console';

interface ContainerProps {}

export const Container = (props: ContainerProps) => {
  return (
    <section id={styles.container}>
      <Console />
    </section>
  );
};
