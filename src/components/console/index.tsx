import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import {
    AnimatePresence, LayoutGroup,
    motion,
    useAnimate,
    useAnimationControls,
    useDragControls,
    useMotionValue,
    useTransform,
} from 'framer-motion';
import styles from './console.module.scss';
import { TextAnimator } from '../text-animator';
import useScreenDimension from '~/hooks/useScreenDimension';

interface ConsoleProps {
}

export const Console: FC<PropsWithChildren<ConsoleProps>> = () => {
    const parentRef = useRef(null);
    const consoleRef = useRef<HTMLDivElement>(null);
    const { height, width } = useScreenDimension();
    const [windowPosition, setWindowPosition] = useState<(string | number)[]>([width / 2, 0]);
    const [minimalize, setMinimalize] = useState<boolean>(false);
    const variants = {
        minimalized: {
            height: 50,
            width: 50,
            x: '1rem', y: height - 125,
        },
        maximalized: {
            height: '30%',
            width: '40%',
            x: windowPosition[0],
            y: windowPosition[1],
        },
    };

    const handleMinimalize = () => {
        console.log('es: ', consoleRef.current?.getBoundingClientRect());
        //animationControls.start({ x: 100, y: 100 });
        if (!minimalize) {
            const { x, y } = consoleRef.current?.getBoundingClientRect()!;
            setWindowPosition([x, y]);
        }
        setMinimalize(prevState => !prevState);
    };

    return (
        <motion.div ref={parentRef}
                    className={`${styles.console_wrapper}`}>
            <AnimatePresence>
                {!minimalize ?
                    <motion.div
                        ref={consoleRef}
                        animate={'maximalized'}
                        transition={{
                            type: 'easeInOut',
                        }}
                        variants={variants}
                        drag dragConstraints={parentRef} dragElastic={1} dragMomentum={false}
                        className={`${styles.window}`}
                    >
                        <motion.div className={styles.window_bar} whileTap={{ cursor: 'grabbing' }}
                                    whileHover={{ cursor: 'grab' }}>
                            <div />
                            <div className={styles.window_bar_title}>Terminal</div>
                            <div className={styles.window_bar_wrapper}>
                                <button className={styles.window_bar_wrapper_btn} onClick={handleMinimalize} />
                            </div>
                        </motion.div>
                        <div className={styles.window_section}><TextAnimator delay={2} text={'Inez Dobra Dupa ;)'} />
                        </div>
                    </motion.div>
                    :
                    <motion.div className={styles.window_minimalized} onClick={handleMinimalize}
                                animate={'minimalized'}
                                variants={variants}
                                transition={{
                                    type: 'easeInOut',
                                }}
                    >
                        <motion.div whileHover={{ cursor: 'pointer' }}>
                            <span>{'>'}</span>
                            <motion.span
                                className={styles.window_minimalized_underscore}
                                animate={{ opacity: [0, 1] }}
                                transition={{
                                    delay: 1,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: 'linear',
                                    duration: 0.5,
                                }}
                            >
                                _
                            </motion.span>
                        </motion.div>
                    </motion.div>}
            </AnimatePresence>
        </motion.div>
    );
};
