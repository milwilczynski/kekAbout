import React, { FC, PropsWithChildren, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Underscore } from '~/components/Underscore';

interface PageLabelProps {
    className: string;
    label: string;
}

export const PageLabel: FC<PropsWithChildren<PageLabelProps>> = ({
                                                                     className,
                                                                     label,
                                                                 }: PageLabelProps) => {
    const refView = useRef(null);
    const isInView = useInView(refView);
    return (
        <motion.div
            className={className}
            ref={refView}
            style={{
                opacity: isInView ? 1 : 0,
                transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
        >
            <span>{'>'}</span>
            <span>.{label}</span>
            <span>()</span>
            <Underscore />
        </motion.div>
    );
};
