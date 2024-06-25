import React, { FC, PropsWithChildren, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.scss';
import { PageLabel } from '~/components/label/PageLabel';

interface HomeProps {
}

export const Home: FC<PropsWithChildren<HomeProps>> = () => {
    const ref = useRef(null);
    return (
        <section className={styles.home} ref={ref}>
            <PageLabel className={styles.home_label} label="home" />
            {/*<motion.div className={styles.home_animation}>*/}
            {/*    <motion.div>*/}
            {/*        <span>{'>'}</span>*/}
            {/*        <motion.span*/}
            {/*            className={styles.home_animation_underscore}*/}
            {/*            animate={{ opacity: [0, 1] }}*/}
            {/*            transition={{*/}
            {/*                delay: 1,*/}
            {/*                repeat: Infinity,*/}
            {/*                repeatDelay: 2,*/}
            {/*                ease: 'linear',*/}
            {/*                duration: 0.5,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            _*/}
            {/*        </motion.span>*/}
            {/*    </motion.div>*/}
            {/*</motion.div>*/}
            <div className={styles.home_wrapper}>{/* <Console /> */}</div>
        </section>
    );
};
