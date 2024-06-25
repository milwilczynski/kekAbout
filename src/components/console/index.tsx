import React, { FC, PropsWithChildren, useRef } from 'react';
import styles from './console.module.scss';
import { TextAnimator } from '../text-animator';

interface ConsoleProps {
}

export const Console: FC<PropsWithChildren<ConsoleProps>> = () => {
    const ref = useRef(null);
    return (
        <section className={styles.console_wrapper}>
            <div
                ref={ref}
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
            </div>
        </section>
    );
};
