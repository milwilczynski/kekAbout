import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { AnimationPlaybackControls, animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { CursorBlinker } from '../cursor-blinker';

interface TextAnimatorProps {
    delay: number;
    text: string;
}

interface UseAnimationProps {
    text: string;
}

const useAnimation = ({ text }: UseAnimationProps) => {
    const reverseRef = useRef<boolean>(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        return Math.round(latest);
    });
    const displayText = useTransform(rounded, (latest) => {
        return text.slice(0, latest);
    });

    const applyAnimation = (keyframes: number[]) => {
        let animation = animate(count, keyframes, {
            type: 'keyframes',
            delay: 0.5,
            duration: 2,
            ease: 'easeInOut',
            autoplay: false,
            onComplete: () => {
                reverseRef.current = !reverseRef.current;
            },
        });

        return animation;
    };

    const getKeyframes = () => {
        if (reverseRef.current) return [text.length, 0];
        else return [0, text.length];
    };
    const playAnimation = () => {
        applyAnimation(getKeyframes()).play();
    };

    return { displayText: displayText, playAnimation: playAnimation };
};

export const TextAnimator: FC<PropsWithChildren<TextAnimatorProps>> = ({ delay, text }: TextAnimatorProps) => {
    const { playAnimation, displayText } = useAnimation({ text });

    return <>
        <button onClick={() => {
            playAnimation();
        }}>ELO
        </button>
        <motion.span>{displayText}</motion.span>
        <CursorBlinker />
    </>;
};
