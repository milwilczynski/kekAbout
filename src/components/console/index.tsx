import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './console.module.scss';
import { TextAnimator } from '../text-animator';
import useScreenDimension from '~/hooks/useScreenDimension';

interface ConsoleProps {
}

export const Console: FC<PropsWithChildren<ConsoleProps>> = () => {
    const ref = useRef(null);


    return (
        <motion.div ref={ref}
                    className={styles.console_wrapper}>
            <motion.div
                drag dragConstraints={ref} dragElastic={0.1} dragMomentum={false}
                className={styles.window}
            >
                <div className={styles.window_bar}>
                    <div />
                    <div className={styles.window_bar_title}>Terminal</div>
                    <div className={styles.window_bar_wrapper}>
                        <div className={styles.window_bar_wrapper_btn} />
                        <div className={styles.window_bar_wrapper_btn} />
                        <div className={styles.window_bar_wrapper_btn} />
                    </div>
                </div>
                <div className={styles.window_section}><TextAnimator delay={2} text={'Inez Dobra Dupa ;)'} /></div>
            </motion.div>
        </motion.div>
    );
};
