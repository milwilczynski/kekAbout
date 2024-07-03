import type { FC, PropsWithChildren } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ConsoleContext } from '~/providers/contexts/console-context'
import useScreenDimension from '~/hooks/useScreenDimension'
import { useTextAnimator } from '~/components/text-animator/useTextAnimator'

interface ConsoleProviderProps {

}

export const ConsoleProvider: FC<PropsWithChildren<ConsoleProviderProps>> = ({ children }) => {
  const [text, setText] = useState<string>('')
  const [action, setAction] = useState<() => void>()
  const { displayText, playAnimation, ready, reverse } = useTextAnimator({ text, onCompleteAction: action })

  const consoleRef = useRef<HTMLDivElement>(null)
  const { width } = useScreenDimension()
  const [isMinimalized, setIsMinimalized] = useState<boolean>(false)
  const [windowPosition, setWindowPosition] = useState<{ x: number, y: number }>({ x: width * 0.58, y: 0 })

  const minimalize = () => {
    if (!isMinimalized) {
      const { x, y } = consoleRef.current?.getBoundingClientRect()!
      setWindowPosition({ x, y })
    }

    setIsMinimalized((prevState) => { return !prevState })
  }

  const doAction = useCallback((_text: string, _action: () => void) => {
    console.log('reverse: ', reverse)
    if (reverse) {
      setAction(() => {
        return () => {
          setText(_text)
          setAction(() => { return _action })
        }
      })
    }
    else {
      setText(_text)
      setAction(() => {
        return _action
      })
    }
  }, [action, text, reverse])

  useEffect(() => {
    ready && playAnimation()
  }, [ready, action])

  const value = useMemo(() => {
    return { state: { doAction, text, consoleRef }, animation: { play: playAnimation, displayText }, position: { minimalize, isMinimalized, window: windowPosition } }
  }, [minimalize, text, action])

  return <ConsoleContext.Provider value={value}>{children}</ConsoleContext.Provider>
}
