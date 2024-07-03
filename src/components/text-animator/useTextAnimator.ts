import { useCallback, useEffect, useState } from 'react'
import { animate, useMotionValue, useTransform } from 'framer-motion'

interface UseAnimationProps {
  text: string
  onCompleteAction?: () => void
}

export function useTextAnimator({ text, onCompleteAction }: UseAnimationProps) {
  const [reverse, setReverse] = useState(false)
  const [ready, setReady] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest)
  })
  const displayText = useTransform(rounded, (latest) => {
    return text.slice(0, latest)
  })

  const applyAnimation = useCallback((keyframes: number[]) => {
    return animate(count, keyframes, {
      type: 'keyframes',
      delay: 0.5,
      duration: 1,
      ease: 'easeInOut',
      autoplay: false,
      onComplete: () => {
        console.log('complete')
        setReverse((prevState) => { return !prevState })
        setTimeout(() => { return onCompleteAction?.() }, 250)
      },
    })
  }, [reverse, onCompleteAction])

  const getKeyframes = () => {
    if (reverse)
      return [text.length, 0]
    else return [0, text.length]
  }

  const playAnimation = () => {
    console.log('play animation')
    applyAnimation(getKeyframes()).play()
  }

  useEffect(() => {
    console.log(!!text)
    setReady(!!text)
  }, [text])

  return { displayText, playAnimation, ready, reverse }
}
